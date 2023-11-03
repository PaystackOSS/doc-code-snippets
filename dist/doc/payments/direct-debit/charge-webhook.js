const json = `{
	"event": "charge.success",
	"data": {
		"id": 1504238596,
		"domain": "live",
		"status": "success",
		"reference": "nl3eljdd6qgbrho",
		"amount": 10000,
		"message": "madePayment",
		"gateway_response": "Payment successful",
		"paid_at": "2023-10-24T12:32:30.000Z",
		"created_at": "2023-10-24T12:32:24.000Z",
		"channel": "direct_debit",
		"currency": "NGN",
		"ip_address": null,
		"metadata": "",
		"fees_breakdown": null,
		"log": null,
		"fees": 0,
		"fees_split": null,
		"authorization": {
			"authorization_code": "AUTH_JV4T9Wawdj",
			"bin": null,
			"last4": null,
			"exp_month": null,
			"exp_year": null,
			"channel": "direct_debit",
			"card_type": null,
			"bank": "Guaranty Trust Bank",
			"country_code": "NG",
			"brand": null,
			"reusable": true,
			"signature": null,
			"account_name": null
		},
		"customer": {
			"id": 180061682,
			"first_name": "Ravi",
			"last_name": "Demo",
			"email": "ravi@demo.com",
			"customer_code": "CUS_24lze1c8i2zl76y",
			"phone": "",
			"metadata": null,
			"risk_action": "default",
			"international_format_phone": null
		},
		"plan": {},
		"subaccount": {},
		"split": {},
		"order_id": null,
		"paidAt": "2023-10-24T12:32:30.000Z",
		"requested_amount": 10000,
		"pos_transaction_data": null,
		"source": {
			"type": "api",
			"source": "merchant_api",
			"entry_point": "charge",
			"identifier": null
		}
	}
}
`

export {json}