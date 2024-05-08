PaystackSdk.chargeCard(this, charge, object : TransactionCallback {
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
})