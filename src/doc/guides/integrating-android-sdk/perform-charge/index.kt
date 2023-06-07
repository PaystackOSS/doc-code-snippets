class CheckoutActivity : AppCompatActivity() {

    // ...

    override fun onCreate(savedInstanceState: Bundle?) { ... }

    private fun initializeFormVariables() { ... }

    private fun performCharge() {
        val cardNumber = mCardNumber.editText!!.text.toString()
        val cardExpiry = mCardExpiry.editText!!.text.toString()
        val cvv = mCardCVV.editText!!.text.toString()

        val cardExpiryArray = cardExpiry.split("/").toTypedArray()
        val expiryMonth = cardExpiryArray[0].toInt()
        val expiryYear = cardExpiryArray[1].toInt()
        var amount = intent.getIntExtra(getString(R.string.meal_name), 0)
        amount *= 100

        val card = Card(cardNumber, expiryMonth, expiryYear, cvv)

        val charge = Charge()
        charge.amount = amount
        charge.email = "customer@email.com"
        charge.card = card

        PaystackSdk.chargeCard(this, charge, object : TransactionCallback {
            override fun onSuccess(transaction: Transaction) {
                parseResponse(transaction.reference)
            }

            override fun beforeValidate(transaction: Transaction) {
                Log.d("Main Activity", "beforeValidate: " + transaction.reference)
            }

            override fun onError(error: Throwable, transaction: Transaction) {
                Log.d("Main Activity", "onError: " + error.localizedMessage)
                Log.d("Main Activity", "onError: $error")
            }
        })
    }
}