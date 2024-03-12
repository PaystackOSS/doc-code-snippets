const kt = `private lateinit var paymentSheet: PaymentSheet

override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_main)

  // library initialization code snippets and others go here

  paymentSheet = PaymentSheet(this, ::paymentComplete)

  // more snippet
}`

const java = `private PaymentSheet paymentSheet;

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_main);

  // library initialization code snippets and others go here

  paymentSheet = new PaymentSheet(this, this::paymentComplete);

  // other code snippet
}`

export {kt, java}