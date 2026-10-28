private PaymentSheet paymentSheet;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // other code snippet

    paymentSheet = new PaymentSheet(this, this::paymentComplete);
}

private void makePayment() {
    // Pass access_code from transaction initialize call
    paymentSheet.launch(paystack, "ACCESS_CODE");
}
