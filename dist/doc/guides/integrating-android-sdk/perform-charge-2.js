const kt = `val card = Card(cardNumber, expiryMonth, expiryYear, cvv)

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
})`

const java = `Card card = new Card(cardNumber, expiryMonth, expiryYear, cvv);

Charge charge = new Charge();
charge.setAmount(amount);
charge.setEmail("customer@email.com");
charge.setCard(card);

PaystackSdk.chargeCard(this, charge, new Paystack.TransactionCallback() {
    @Override
    public void onSuccess(Transaction transaction) {
        parseResponse(transaction.getReference());
    }

    @Override
    public void beforeValidate(Transaction transaction) {
        Log.d("Main Activity", "beforeValidate: " + transaction.getReference());
    }

    @Override
    public void onError(Throwable error, Transaction transaction) {
        Log.d("Main Activity", "onError: " + error.getLocalizedMessage());
        Log.d("Main Activity", "onError: " + error);
    }

});
`

export {kt, java}