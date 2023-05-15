import WebKit

class CheckoutViewController: UIViewController, WKNavigationDelegate {
  
	// ..........
	
	//This is helper to get url params 
  func getQueryStringParameter(url: String, param: String) -> String? {
    guard let url = URLComponents(string: url) else { return nil }
    return url.queryItems?.first(where: { $0.name == param })?.value
  }
  
  // This is a WKNavigationDelegate func we can use to handle redirection
  func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, 
    decisionHandler: @escaping ((WKNavigationActionPolicy) -> Void)  {

    if let url = navigationAction.request.url {
       
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
}