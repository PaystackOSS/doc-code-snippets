override fun onCreate(savedInstanceState: Bundle?) {
  // ...

  val price = 4000
  val mCheckout: Button = findViewById(R.id.btn_checkout)
  mCheckout.setOnClickListener {
      val intent = Intent(this, CheckoutActivity::class.java).apply {
          putExtra(getString(R.string.meal_name), price)
      }
      startActivity(intent)
  }
}