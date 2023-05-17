const dart = `@override
Widget build(BuildContext context) {
  return Scaffold(
    body: WebView(
      initialUrl: 'https://checkout.paystack.com/7zu1ot06d0qn9h6',
      javascriptMode: JavascriptMode.unrestricted,
      userAgent: 'Flutter;Webview',
    ),
  );
}`

const js = `import React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {

  const authorization_url = 'https://checkout.paystack.com/luKuasMan';

  return (
    <WebView 
      source={{ uri: authorization_url }}
      style={{ marginTop: 40 }}
    />
  );
}`

const kt = `class MainActivity : AppCompatActivity() {

  private val authorizationUrl: String
    get() = "https://checkout.paystack.com/luKuasMan"

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    loadCheckout()
  }

  @SuppressLint("SetJavaScriptEnabled")
  private fun loadCheckout() {
    val webView: WebView = findViewById(R.id.webview)
    webView.settings.apply {
      javaScriptEnabled = true
      javaScriptCanOpenWindowsAutomatically = true
      domStorageEnabled = true
    }

    webView.loadUrl(authorizationUrl)
  }
}`

const swift = `import WebKit

class CheckoutViewController: UIViewController, WKNavigationDelegate {
  
	let callbackUrl = "CALLBACK_URL_GOES_HERE"   
	let pstkUrl =  "AUTHORIZATION_URL_GOES_HERE" 
	let 3dsUrl = "https://standard.paystack.co/close"

  @IBOutlet weak var webView: WKWebView!
	
  override func viewDidLoad() {
    super.viewDidLoad()
    
    let urlRequest = URLRequest.init(url: URL.init(string: pstkUrl)!)
    webView.load(urlRequest)
    self.webView.navigationDelegate = self
	}	
}`

export {dart, js, kt, swift}