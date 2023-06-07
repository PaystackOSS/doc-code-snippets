private fun parseResponse(transactionReference: String) {
  val message = "Payment Successful - $transactionReference"
  Toast.makeText(this, message, Toast.LENGTH_LONG).show()
}