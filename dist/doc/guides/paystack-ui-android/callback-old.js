const kt = `PaystackSdk.chargeCard(this, charge, object : TransactionCallback {
  override fun onSuccess(transaction: Transaction) {
    Log.d("Main Activity", "onSuccess: " + transaction.getReference);
  }

  override fun beforeValidate(transaction: Transaction) {
    Log.d("Main Activity", "beforeValidate: " + transaction.reference)
  }

  override fun onError(error: Throwable, transaction: Transaction) {
    Log.d("Main Activity", "onError: " + error.localizedMessage)
    Log.d("Main Activity", "onError: $error")
  }
})`

const java = `PaystackSdk.chargeCard(this, charge, new Paystack.TransactionCallback() {
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
});`

export {kt, java}