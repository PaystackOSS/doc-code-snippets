const kt = `val paystack = Paystack.builder()
    .setPublicKey("pk_your-public-key")
    .build()
`

const java = `Paystack paystack = Paystack.builder()
        .setPublicKey("pk_your-public-key")
        .build();
`

export {kt, java}