const sh = `curl https://api.paystack.co/transaction/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "reference": "YOUR_REFERENCE", 
      "amount": 500000, 
      "email": "customer@email.com", 
      "currency": "NGN", 
      "callback_url": "https://your_website.com/payment_callback" 
    }'
-X POST`

const json = `{
	"status": true,
	"message": "Authorization URL created",
	"data": {
		"authorization_url": "https://checkout.paystack.com/0peioxfhpn",
		"access_code": "0peioxfhpn",
		"reference": "7PVGX8MEk85tgeEpVDtD"
	}
}`

export {sh, json}