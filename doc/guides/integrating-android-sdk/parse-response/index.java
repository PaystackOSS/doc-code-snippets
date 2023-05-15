private void parseResponse(String transactionReference) {
  String message = "Payment Successful - " + transactionReference;
  Toast.makeText(this, message, Toast.LENGTH_LONG).show();
}
