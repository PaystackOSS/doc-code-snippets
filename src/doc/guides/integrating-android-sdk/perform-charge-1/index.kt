val cardNumber = mCardNumber.editText!!.text.toString()
val cardExpiry = mCardExpiry.editText!!.text.toString()
val cvv = mCardCVV.editText!!.text.toString()

val cardExpiryArray = cardExpiry.split("/").toTypedArray()
val expiryMonth = cardExpiryArray[0].toInt()
val expiryYear = cardExpiryArray[1].toInt()
var amount = intent.getIntExtra(getString(R.string.meal_name), 0)
amount *= 100 // convert amount to kobo