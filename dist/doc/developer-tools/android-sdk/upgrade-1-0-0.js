const kt = `val paystack = Paystack.builder()
  .setPublicKey("pk_domain_xxxxxxxx")
  .build()

paymentSheet = PaymentSheet(this, ::paymentComplete)
paymentSheet.launch(paystack, "ACCESS_CODE")
`

const java = `Paystack paystack = Paystack.builder()
        .setPublicKey("pk_domain_xxxxxxxx")
        .build();

paymentSheet = new PaymentSheet(this, this::paymentComplete);
paymentSheet.launch(paystack, "ACCESS_CODE");
`

export {kt, java}