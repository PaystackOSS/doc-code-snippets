const json = `{
	"message": "Charge attempted",
	"status": true,
	"data": {
		"amount": 100,
		"channel": "mobile_money",
		"created_at": "2018-11-17T14:39:56.000Z",
		"currency": "GHS",
		"domain": "live",
		"fees": 153,
		"gateway_response": "Approved",
		"id": 59333,
		"ip_address": "35.177.189.123, 162.158.155.220",
		"message": "madePayment",
		"paid_at": "2018-11-17T14:40:18.000Z",
		"reference": "l7lvu4y3xcka6zu",
		"status": "success",
		"transaction_date": "2018-11-17T14:39:56.000Z",
		"authorization": {
			"authorization_code": "AUTH_33lz7ev5tq",
			"bank": "MTN Mobile Money",
			"bin": "055XXX",
			"brand": "Mtn mobile money",
			"channel": "mobile_money",
			"country_code": "GH",
			"exp_month": 12,
			"exp_year": 9999,
			"last4": "X149",
			"reusable": false,
			"account_name": null
		},
		"customer": {
			"customer_code": "CUS_s3aa4mx0yyvrqye",
			"email": "customer@email.com",
			"id": 16763,
			"risk_action": "default"
		}
	}
}
`

export {json}