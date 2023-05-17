const json = `{
	"event": "charge.success",
	"data": {
		"id": 59565,
		"domain": "test",
		"status": "success",
		"reference": "48rx32f1womvcr4",
		"amount": 10000,
		"message": "madePayment",
		"gateway_response": "Payment successful",
		"paid_at": "2018-12-05T15:58:45.000Z",
		"created_at": "2018-12-05T15:58:02.000Z",
		"channel": "qr",
		"currency": "NGN",
		"ip_address": "18.130.45.28, 141.101.107.157",
		"metadata": "",
		"log": null,
		"fees": null,
		"fees_split": null,
		"authorization": {
			"authorization_code": "AUTH_2b4zs69fgy7qflh",
			"bin": "483953",
			"last4": "6208",
			"exp_month": "12",
			"exp_year": "2018",
			"channel": "qr",
			"card_type": "DEBIT",
			"bank": "Visa QR",
			"country_code": "NG",
			"brand": "VISA",
			"reusable": false,
			"signature": null,
			"account_name": "BoJack Horseman"
		},
		"customer": {
			"id": 16787,
			"first_name": "I",
			"last_name": "SURRENDER",
			"email": "customer@email.com",
			"customer_code": "CUS_ehg851zbxon0bvx",
			"phone": "",
			"metadata": null,
			"risk_action": "default"
		},
		"plan": {},
		"subaccount": {},
		"subaccount_group": {},
		"paidAt": "2018-12-05T15:58:45.000Z"
	}
}`

export {json}