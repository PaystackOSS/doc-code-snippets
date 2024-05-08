const kt = `private fun paymentComplete(paymentSheetResult: PaymentSheetResult) {
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
}`

const java = `private void paymentComplete(PaymentSheetResult paymentResult) {
    String message;
    if (paymentResult instanceof PaymentSheetResult.Cancelled) {
        message = "Cancelled";
    } else if (paymentResult instanceof PaymentSheetResult.Failed) {
        PaymentSheetResult.Failed failedResult = (PaymentSheetResult.Failed) paymentResult;
        Log.e(TAG, failedResult.getError().getMessage() != null ?
                failedResult.getError().getMessage() : "Failed", failedResult.getError());
        message = failedResult.getError().getMessage() != null ?
                failedResult.getError().getMessage() : "Failed";
    } else if (paymentResult instanceof PaymentSheetResult.Completed) {
       Log.d("Payment successful", paymentSheetResult.paymentCompletionDetails.toString())
        message = "Successful";
    } else {
        message = "";
    }
}`

export {kt, java}