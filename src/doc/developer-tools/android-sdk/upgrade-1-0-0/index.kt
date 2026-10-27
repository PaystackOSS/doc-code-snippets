val paystack = Paystack.builder()
  .setPublicKey("pk_domain_xxxxxxxx")
  .build()

paymentSheet = PaymentSheet(this, ::paymentComplete)
paymentSheet.launch(paystack, "ACCESS_CODE")
