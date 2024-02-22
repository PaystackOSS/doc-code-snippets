const dart = `@override
Widget build(BuildContext context) {
  return Scaffold(
    body: WebView(
      initialUrl: 'https://checkout.paystack.com/7zu1ot06d0qn9h6',
      javascriptMode: JavascriptMode.unrestricted,
      userAgent: 'Flutter;Webview',
      navigationDelegate: (navigation) {
        //Listen for callback URL
        if (navigation.url == "https://hello.pstk.xyz/callback") {
          verifyTransaction(reference);
          Navigator.of(context).pop(); //close webview
        }
        if (navigation.url == "https://your-cancel-url.com") {
          //handle webview removal
          Navigator.of(context).pop(); //close webview
          //Run the cancel payment function if you have one
        }
        return NavigationDecision.navigate;
      },
    ),
  );
}
`

const js = `import React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {

  const authorization_url = 'https://checkout.paystack.com/luKuasMan';
  const callback_url = 'https://yourcallback.com';
  const cancel_url = "https://your-cancel-url.com";

  onNavigationStateChange = state => {
 
    const { url } = state;

    if (!url) return;

    if (url === callback_url) {
			// get transaction reference from url and verify transaction, then redirect
      const redirectTo = 'window.location = "' + callback_url + '"';
      this.webview.injectJavaScript(redirectTo);
    }
    if (url === cancel_url) {
      // handle webview removal
      // You can either unmount the component, or
      // Use a navigator to pop off the view
      // Run the cancel payment function if you have one
    }
  };

  return (
    <WebView 
      source={{ uri: authorization_url }}
      style={{ marginTop: 40 }}
      onNavigationStateChange={ this.onNavigationStateChange }
    />
  );
}`

const kt = `class MainActivity : AppCompatActivity() {

  private val authorizationUrl: String
    get() = "https://checkout.paystack.com/ok62i2sdld514e4"
  private val callbackUrl: String
    get() = "https://yourcallback.com"
  private val cancelUrl: String
    get() = "https://your-cancel-url.com"

  override fun onCreate(savedInstanceState: Bundle?) {
    // ...
  }

  @SuppressLint("SetJavaScriptEnabled")
  private fun loadCheckout() {
    val webView: WebView = findViewById(R.id.webview)
    webView.settings.apply {
      javaScriptEnabled = true
      javaScriptCanOpenWindowsAutomatically = true
      domStorageEnabled = true
    }

    webView.webViewClient = object:  WebViewClient() {
      override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
        val url: Uri? = request?.url

        if (url?.host == callbackUrl) {
          return true
        }
        if (url?.host == cancelUrl) {
          // handle webview removal
          // Run the cancel payment function if you have one
          return true
        }
        
        return super.shouldOverrideUrlLoading(view, request)
      }
    }

    webView.loadUrl(authorizationUrl)
  }
}`

const swift = `import WebKit

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
}`

export {dart, js, kt, swift}