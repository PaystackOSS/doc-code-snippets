const kt = `Paystack.builder()
  .setPublicKey("pk_domain_xxxxxxxx")
  .build()

paymentSheet = PaymentSheet(this, ::paymentComplete)
paymentSheet.launch("ACCESS_CODE")
`

const java = `Paystack.builder()
        .setPublicKey("pk_domain_xxxxxxxx")
        .build();

paymentSheet = new PaymentSheet(this, this::paymentComplete);
paymentSheet.launch("ACCESS_CODE");
`

export {kt, java}