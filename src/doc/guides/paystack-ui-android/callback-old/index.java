PaystackSdk.chargeCard(this, charge, new Paystack.TransactionCallback() {
    @Override
    public void onSuccess(Transaction transaction) {
        Log.d("Main Activity", "Success: " + transaction.getReference());
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