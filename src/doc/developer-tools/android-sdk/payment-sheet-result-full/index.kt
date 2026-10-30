private fun paymentComplete(paymentSheetResult: PaymentSheetResult) {
  val message = when (paymentSheetResult) {
    PaymentSheetResult.Cancelled -> "Cancelled"
    is PaymentSheetResult.Failed -> {
      Log.e("Something went wrong", paymentSheetResult.error.message.orEmpty(), paymentSheetResult.error)
      // If there's a reference, verify the transaction on your server. The payment may still complete.
      paymentSheetResult.reference?.let { Log.d("Payment reference", it) }
      paymentSheetResult.error.message ?: "Failed"
    }

    is PaymentSheetResult.Completed -> {
      // Verify the transaction on your server with this reference before giving value
      Log.d("Payment successful", paymentSheetResult.paymentCompletionDetails.reference)
      "Successful"
    }
  }

  Toast.makeText(this, "Payment $message", Toast.LENGTH_SHORT).show()
}