const js = `import React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {

  const authorization_url = 'https://checkout.paystack.com/luKuasMan';
  const callback_url = 'https://yourcallback.com';

  onNavigationStateChange = state => {
 
    const { url } = state;

    if (!url) return;

    if (url === callback_url) {
			// get transaction reference from url and verify transaction, then redirect
      const redirectTo = 'window.location = "' + callback_url + '"';
      this.webview.injectJavaScript(redirectTo);
    }
		
		if(url === 'https://standard.paystack.co/close') {
      // handle webview removal
      // You can either unmount the component, or
      // Use a navigator to pop off the view
    }
  };

  return (
    <WebView 
      source={{ uri: authorization_url }}
      style={{ marginTop: 40 }}
      onNavigationStateChange={ this.onNavigationStateChange }
    />
  );
}
`

const dart = `@override
Widget build(BuildContext context) {
  return Scaffold(
    body: WebView(
    initialUrl: 'https://checkout.paystack.com/7zu1ot06d0qn9h6',
    javascriptMode: JavascriptMode.unrestricted,
    userAgent: 'Flutter;Webview',
    navigationDelegate: (navigation){
      if(navigation.url == 'https://standard.paystack.co/close'){
        Navigator.of(context).pop(); //close webview
      }
      if(navigation.url == "https://hello.pstk.xyz/callback"){
         Navigator.of(context).pop(); //close webview 
      }
      return NavigationDecision.navigate;
    },
  ),
  );
}`

const kt = `class MainActivity : AppCompatActivity() {

  private val authorizationUrl: String
      get() = "https://checkout.paystack.com/ok62i2sdld514e4"
  private val callbackUrl: String
      get() = "https://yourcallback.com"

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
              } else if (url.toString() == "https://standard.paystack.co/close") {
                  finish()
                  return false
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
}`

export {js, dart, kt, swift}