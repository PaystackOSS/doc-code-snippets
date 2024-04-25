const json = `{
	"event": "charge.success",
	"data": {
		"id": 3725529423,
		"domain": "test",
		"status": "success",
		"reference": "my_reference_3",
		"amount": 25126,
		"message": null,
		"gateway_response": "Approved",
		"paid_at": "2024-04-19T12:12:15.000Z",
		"created_at": "2024-04-19T12:12:12.000Z",
		"channel": "card",
		"currency": "NGN",
		"ip_address": null,
		"metadata": {
			"custom_fields": [
				{
					"display_name": "Bulkcharge ID",
					"variable_name": "bulkcharge_id",
					"value": "191016934"
				},
				{
					"display_name": "Bulkcharge batch code",
					"variable_name": "bulkcharge_batch_code",
					"value": "BCH_ml3zk2hregr1inj"
				},
				{
					"display_name": "Charged via",
					"variable_name": "charged_via",
					"value": "Bulkcharge"
				}
			]
		},
		"fees_breakdown": null,
		"log": null,
		"fees": 126,
		"fees_split": null,
		"authorization": {
			"authorization_code": "AUTH_84bqxd3rkf",
			"bin": "408408",
			"last4": "4081",
			"exp_month": "12",
			"exp_year": "2030",
			"channel": "card",
			"card_type": "visa ",
			"bank": "TEST BANK",
			"country_code": "NG",
			"brand": "visa",
			"reusable": true,
			"signature": "SIG_yEXu7dLBeqG0kU7g95Ke",
			"account_name": null,
			"receiver_bank_account_number": null,
			"receiver_bank": null
		},
		"customer": {
			"id": 112907911,
			"first_name": "Mizz",
			"last_name": "Kaneah",
			"email": "mizz@kaneah.com",
			"customer_code": "CUS_lht026y5q7p27o5",
			"phone": "245421361",
			"metadata": {},
			"risk_action": "default",
			"international_format_phone": "+245421361"
		},
		"plan": {},
		"subaccount": {},
		"split": {},
		"order_id": null,
		"paidAt": "2024-04-19T12:12:15.000Z",
		"requested_amount": 25000,
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