Card card = new Card(cardNumber, expiryMonth, expiryYear, cvv);

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
