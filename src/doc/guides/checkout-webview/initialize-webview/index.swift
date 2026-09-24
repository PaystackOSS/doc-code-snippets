import WebKit

class CheckoutViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {

	let callbackUrl = "CALLBACK_URL_GOES_HERE"
	let pstkUrl =  "AUTHORIZATION_URL_GOES_HERE"
	let 3dsUrl = "https://standard.paystack.co/close"

  @IBOutlet weak var webView: WKWebView!

  override func viewDidLoad() {
    super.viewDidLoad()

    let urlRequest = URLRequest.init(url: URL.init(string: pstkUrl)!)
    webView.load(urlRequest)
    self.webView.navigationDelegate = self
    self.webView.uiDelegate = self
	}
}