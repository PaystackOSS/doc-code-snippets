private lateinit var paymentSheet: PaymentSheet

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    // other code snippet

    paymentSheet = PaymentSheet(this, ::paymentComplete)
}

private fun makePayment() {
    // Pass access_code from transaction initialize call
    paymentSheet.launch("access_code")
}