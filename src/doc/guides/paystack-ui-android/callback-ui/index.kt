private fun paymentComplete(paymentSheetResult: PaymentSheetResult) {
  val message = when (paymentSheetResult) {
    PaymentSheetResult.Cancelled -> "Cancelled"
    is PaymentSheetResult.Failed -> {
      Log.e("Something went wrong", paymentSheetResult.error.message.orEmpty(), paymentSheetResult.error)
      paymentSheetResult.error.message ?: "Failed"
    }

    is PaymentSheetResult.Completed -> {
      // Returns the transaction reference  PaymentCompletionDetails(reference={TransactionRef})
      Log.d("Payment successful", paymentSheetResult.paymentCompletionDetails.toString())
      "Successful"
    }
  }
}