class MainActivity : AppCompatActivity() {

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
}