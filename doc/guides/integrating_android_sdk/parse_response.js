const java = `private void parseResponse(String transactionReference) {
  String message = "Payment Successful - " + transactionReference;
  Toast.makeText(this, message, Toast.LENGTH_LONG).show();
}`

const kotlin = `private fun parseResponse(transactionReference: String) {
  val message = "Payment Successful - $transactionReference"
  Toast.makeText(this, message, Toast.LENGTH_LONG).show()
}`

export { java, kotlin }
