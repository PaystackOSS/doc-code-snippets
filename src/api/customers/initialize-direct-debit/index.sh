#!/bin/sh
url="https://api.paystack.co/customer/{id}/initialize-direct-debit"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "account": {
		"number": "0123456789",
		"bank_code": "058"
	},
	"address": {
		"street": "Some Where",
		"city": "Ikeja",
		"state": "Lagos"
	}
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST