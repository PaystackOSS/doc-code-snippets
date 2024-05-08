private lateinit var paymentSheet: PaymentSheet

override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      // other code snippet
			
      paymentSheet = PaymentSheet(this, this::paymentComplete);
}

private fun makePayment() {
    // send payment details to your server, and return the access_code
    paymentSheet.launch("{your-access-code}")
}