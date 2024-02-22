class MainActivity : AppCompatActivity() {

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
}