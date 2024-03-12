private lateinit var paymentSheet: PaymentSheet

override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_main)

  // library initialization code snippets and others go here

  paymentSheet = PaymentSheet(this, ::paymentComplete)

  // more snippet
}