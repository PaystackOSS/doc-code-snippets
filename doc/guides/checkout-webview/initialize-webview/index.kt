class MainActivity : AppCompatActivity() {

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
}