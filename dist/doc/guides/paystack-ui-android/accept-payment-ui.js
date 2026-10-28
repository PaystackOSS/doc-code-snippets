const kt = `private lateinit var paymentSheet: PaymentSheet

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    // other code snippet

    paymentSheet = PaymentSheet(this, ::paymentComplete)
}

private fun makePayment() {
    // Pass access_code from transaction initialize call
    paymentSheet.launch(paystack, "ACCESS_CODE")
}`

const java = `private PaymentSheet paymentSheet;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // other code snippet

    paymentSheet = new PaymentSheet(this, this::paymentComplete);
}

private void makePayment() {
    // Pass access_code from transaction initialize call
    paymentSheet.launch(paystack, "ACCESS_CODE");
}
`

export {kt, java}