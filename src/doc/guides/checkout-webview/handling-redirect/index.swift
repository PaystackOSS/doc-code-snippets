import WebKit

class CheckoutViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {

	// Prefix, not substring - otherwise a page could smuggle the host into a
	// query string (e.g. https://evil.com/?u=https://joinzap.com/app/) and
	// force an external open.
	private let deepLinkPrefixes = ["https://joinzap.com/app/"]

	// ..........

	//This is helper to get url params
  func getQueryStringParameter(url: String, param: String) -> String? {
    guard let url = URLComponents(string: url) else { return nil }
    return url.queryItems?.first(where: { $0.name == param })?.value
  }

  // This is a WKNavigationDelegate func we can use to handle redirection
  func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
    decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {

    if let url = navigationAction.request.url {

			// Partner-app handoff: cancel the load and ask the OS to open it.
			// `universalLinksOnly: true` means open the app, or fail - never fall
			// back to loading the page in Safari.
      if deepLinkPrefixes.contains(where: { url.absoluteString.hasPrefix($0) }) {
        UIApplication.shared.open(url, options: [.universalLinksOnly: true]) { opened in
          if !opened {
            UIApplication.shared.open(url) // app not installed; web fallback
          }
        }
        decisionHandler(.cancel)
        return
      }

      /*
			We control here when the user wants to cancel a payment.
			By default a cancel action redirects to http://cancelurl.com/.
			Based on our workflow we can for example remove the webview or push
			another view to the user.
			*/
      if url.absoluteString == "http://cancelurl.com/"{
        decisionHandler(.cancel)
      }
      else{
        decisionHandler(.allow)
      }

			//After a successful transaction we can check if the current url is the callback url
			//and do what makes sense for our workflow. We can get the transaction reference for example.

	    if url.absoluteString.hasPrefix(callbackUrl){
        let reference = getQueryStringParameter(url: url.absoluteString, param: "reference")
        print("reference \(reference)")
      }
    }
  }

  // A link with target="_blank" produces no navigation action in the main
  // frame, so without this WKUIDelegate method the tap is silently dropped.
  // Requires `webView.uiDelegate = self` to be set where the WebView is created.
  func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
    for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
    if navigationAction.targetFrame == nil {
      webView.load(navigationAction.request)
    }
    return nil
  }
}
