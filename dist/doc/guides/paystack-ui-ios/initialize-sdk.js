const from = `Paystack.setDefaultPublicKey("pk_test_xxxxx")`

const to = `let paystack = try? PaystackBuilder
			.newInstance
			.setKey("pk_test_xxxx")
			.build()`

export {from, to}