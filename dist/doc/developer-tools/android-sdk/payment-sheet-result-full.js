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

  Toast.makeText(this, "Payment $message", Toast.LENGTH_SHORT).show()
}`

const java = `private void paymentComplete(PaymentSheetResult paymentSheetResult) {
  String message;

  if (paymentSheetResult instanceof PaymentSheetResult.Cancelled) {
    message = "Cancelled";
  } else if (paymentSheetResult instanceof PaymentSheetResult.Failed) {
    PaymentSheetResult.Failed failedResult = (PaymentSheetResult.Failed) paymentSheetResult;
    Log.e("Payment failed",
        failedResult.getError().getMessage() != null ? failedResult.getError().getMessage() : "Failed",
        failedResult.getError());
    message = failedResult.getError().getMessage() != null ? failedResult.getError().getMessage() : "Failed";
  } else if (paymentSheetResult instanceof PaymentSheetResult.Completed) {
    Log.d("Payment successful",
        ((PaymentSheetResult.Completed) paymentSheetResult).getPaymentCompletionDetails().toString());
    message = "Successful";
  } else {
    message = "You shouldn't be here";
  }

  Toast.makeText(this, "Payment " + message, Toast.LENGTH_SHORT).show();
}`

export {kt, java}