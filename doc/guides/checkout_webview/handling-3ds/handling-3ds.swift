import WebKit

class CheckoutViewController: UIViewController, WKNavigationDelegate {
  
	// ..........
	
  // This is a WKNavigationDelegate func we can use to handle redirection
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, 
        decisionHandler: @escaping ((WKNavigationActionPolicy) -> Void)  {

    if let url = navigationAction.request.url {
       
    /*
        We can check here if the 3DS flow is done by checking
        the redirected URl is the one for 3DS after completition
    */
      if url.absoluteString == "https://standard.paystack.co/close"{
        decisionHandler(.cancel)
      }
      else{
        decisionHandler(.allow)
      }
    }
  }
}