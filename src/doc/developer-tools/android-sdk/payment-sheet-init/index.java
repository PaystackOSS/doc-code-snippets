private PaymentSheet paymentSheet;

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_main);

  // library initialization code snippets and others go here

  paymentSheet = new PaymentSheet(this, this::paymentComplete);

  // other code snippet
}