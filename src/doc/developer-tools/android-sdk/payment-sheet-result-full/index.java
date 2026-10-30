private void paymentComplete(PaymentSheetResult paymentSheetResult) {
  String message;

  if (paymentSheetResult instanceof PaymentSheetResult.Cancelled) {
    message = "Cancelled";
  } else if (paymentSheetResult instanceof PaymentSheetResult.Failed) {
    PaymentSheetResult.Failed failedResult = (PaymentSheetResult.Failed) paymentSheetResult;
    Log.e("Payment failed",
        failedResult.getError().getMessage() != null ? failedResult.getError().getMessage() : "Failed",
        failedResult.getError());
    // If there's a reference, verify the transaction on your server. The payment may still complete.
    if (failedResult.getReference() != null) {
      Log.d("Payment reference", failedResult.getReference());
    }
    message = failedResult.getError().getMessage() != null ? failedResult.getError().getMessage() : "Failed";
  } else if (paymentSheetResult instanceof PaymentSheetResult.Completed) {
    // Verify the transaction on your server with this reference before giving value
    Log.d("Payment successful",
        ((PaymentSheetResult.Completed) paymentSheetResult).getPaymentCompletionDetails().getReference());
    message = "Successful";
  } else {
    message = "You shouldn't be here";
  }

  Toast.makeText(this, "Payment " + message, Toast.LENGTH_SHORT).show();
}