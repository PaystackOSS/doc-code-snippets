Paystack paystack = Paystack.builder()
        .setPublicKey("pk_domain_xxxxxxxx")
        .build();

paymentSheet = new PaymentSheet(this, this::paymentComplete);
paymentSheet.launch(paystack, "ACCESS_CODE");
