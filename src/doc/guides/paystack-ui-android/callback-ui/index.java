private void paymentComplete(PaymentSheetResult paymentResult) {
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
}