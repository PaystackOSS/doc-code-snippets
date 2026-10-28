private void paymentComplete(PaymentSheetResult paymentResult) {
    String message;
    if (paymentResult instanceof PaymentSheetResult.Cancelled) {
        message = "Cancelled";
    } else if (paymentResult instanceof PaymentSheetResult.Failed) {
        PaymentSheetResult.Failed failedResult = (PaymentSheetResult.Failed) paymentResult;
        Log.e("Payment failed", failedResult.getError().getMessage() != null ?
                failedResult.getError().getMessage() : "Failed", failedResult.getError());
        message = failedResult.getError().getMessage() != null ?
                failedResult.getError().getMessage() : "Failed";
    } else if (paymentResult instanceof PaymentSheetResult.Completed) {
        Log.d("Payment successful",
                ((PaymentSheetResult.Completed) paymentResult).getPaymentCompletionDetails().toString());
        message = "Successful";
    } else {
        message = "";
    }
}