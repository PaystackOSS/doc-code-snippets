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