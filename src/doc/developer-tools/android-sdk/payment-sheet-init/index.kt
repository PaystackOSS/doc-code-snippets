private lateinit var paymentSheet: PaymentSheet

override fun onCreate(savedInstanceState: Bundle?) {  
  super.onCreate(savedInstanceState)
  
  paymentSheet = PaymentSheet(this) { paymentResult ->
    // Handle payment result here.
  }
    
}