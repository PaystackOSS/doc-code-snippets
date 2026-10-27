const kt = `private val paystack = Paystack.builder()
    .setPublicKey("pk_domain_xxxxxxxx")
    .setLoggingEnabled(true)
    .build()
`

const java = `private final Paystack paystack = Paystack.builder()
        .setPublicKey("pk_domain_xxxxxxxx")
        .setLoggingEnabled(true)
        .build();
`

export {kt, java}