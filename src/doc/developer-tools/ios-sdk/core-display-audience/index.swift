let paystack = try? PaystackBuilder
        .newInstance
        .setKey("pk_domain_xxxxxxxx")
        .setDisplayAudience(.merchantFacing)
        .build()
