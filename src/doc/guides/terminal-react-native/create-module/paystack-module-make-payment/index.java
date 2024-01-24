@ReactMethod
public void makePayment(int amount, Callback callback) {
  TransactionRequest transactionRequest = new TransactionRequest();
  transactionRequest.setAmount(amount);

  Activity currentActivity = getCurrentActivity();
  mCallback = callback;

  try {
      final Intent transactionIntent = new Intent(Intent.ACTION_VIEW);
      transactionIntent.setPackage("com.paystack.pos");
      transactionIntent.putExtra("com.paystack.pos.TRANSACT",
              gson.toJson(transactionRequest));
      currentActivity.startActivityForResult(transactionIntent, 1);
  } catch (Exception e) {
      Log.d("PaystackModule", "Error: " + e.getMessage());
  }
}