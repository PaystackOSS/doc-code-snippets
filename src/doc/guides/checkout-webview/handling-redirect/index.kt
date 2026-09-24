class MainActivity : AppCompatActivity() {

  private val authorizationUrl: String
    get() = "https://checkout.paystack.com/ok62i2sdld514e4"
  private val callbackUrl: String
    get() = "https://yourcallback.com"
  private val cancelUrl: String
    get() = "https://your-cancel-url.com"

  // Prefix, not substring - otherwise a page could smuggle the host into a
  // query string and force an external open.
  private val deepLinkPrefixes = listOf("https://joinzap.com/app/")

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

        if (url != null && deepLinkPrefixes.any { url.toString().startsWith(it) }) {
          // Partner-app handoff: resolve to an installed app only; do not open a browser.
          val intent = Intent(Intent.ACTION_VIEW, url).apply {
            addCategory(Intent.CATEGORY_BROWSABLE)
            // Requires API 30+. On older versions, query
            // packageManager.queryIntentActivities and only start the intent
            // if a non-browser activity handles it.
            flags = Intent.FLAG_ACTIVITY_REQUIRE_NON_BROWSER
          }
          return try {
            startActivity(intent)
            true // navigation consumed
          } catch (e: ActivityNotFoundException) {
            false // no app installed - let the WebView load the web page
          }
        }

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