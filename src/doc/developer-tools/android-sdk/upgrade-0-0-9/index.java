Paystack.builder()
        .setPublicKey("pk_domain_xxxxxxxx")
        .build();

paymentSheet = new PaymentSheet(this, this::paymentComplete);
paymentSheet.launch("ACCESS_CODE");
