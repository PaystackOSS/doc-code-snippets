const authorization_active = `{
	"event": "direct_debit.authorization.active",
	"data": {
		"authorization_code": "AUTH_JV4T9Wawdj",
		"active": true,
		"last4": "1234",
		"channel": "direct_debit",
		"card_type": "mandate",
		"bank": "Guaranty Trust Bank",
		"exp_month": 1,
		"exp_year": 2034,
		"country_code": "NG",
		"brand": "Guaranty Trust Bank",
		"reusable": true,
		"signature": "SIG_u8SqR3E6ty2koQ9i5IrI",
		"account_name": "Ravi Demo",
		"integration": 191390,
		"domain": "live",
		"reference": "miinublwbjkjm7",
		"customer": {
			"first_name": "Ravi",
			"last_name": "Demo",
			"code": "CUS_g0a2pm2ilthhh62",
			"email": "ravi@demo.com",
			"phone": "",
			"metadata": null,
			"risk_action": "default"
		}
	}
}
`

const authorization_created = `{
	"event": "direct_debit.authorization.created",
	"status": true,
	"message": "Authorization retrieved successfully",
	"data": {
		"authorization_code": "AUTH_JV4T9Wawdj",
		"active": false,
		"last4": "1234",
		"channel": "direct_debit",
		"card_type": "mandate",
		"bank": "Guaranty Trust Bank",
		"exp_month": 1,
		"exp_year": 2034,
		"country_code": "NG",
		"brand": "Guaranty Trust Bank",
		"reusable": true,
		"signature": "SIG_u8SqR3E6ty2koQ9i5IrI",
		"account_name": "Ravi Demo",
		"customer": {
			"first_name": "Ravi",
			"last_name": "Demo",
			"code": "CUS_g0a2pm2ilthhh62",
			"email": "ravi@demo.com",
			"phone": "",
			"metadata": null,
			"risk_action": "default"
		}
	}
}
`

export {authorization_active, authorization_created}