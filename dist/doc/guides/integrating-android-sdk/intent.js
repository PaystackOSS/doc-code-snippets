const kt = `override fun onCreate(savedInstanceState: Bundle?) {
  // ...

  val price = 4000
  val mCheckout: Button = findViewById(R.id.btn_checkout)
  mCheckout.setOnClickListener {
      val intent = Intent(this, CheckoutActivity::class.java).apply {
          putExtra(getString(R.string.meal_name), price)
      }
      startActivity(intent)
  }
}`

const java = `@Override
protected void onCreate(Bundle savedInstanceState) {
   // ...

    int price = 4000;
    Button mCheckout = findViewById(R.id.btn_checkout);

    mCheckout.setOnClickListener(v -> {
        Intent intent = new Intent(MainActivity.this, CheckoutActivity.class);
        intent.putExtra(getString(R.string.meal_name), price);
        startActivity(intent);
    });
}
`

export {kt, java}