curl https://api.paystack.co/customer/{customer_code}/identification
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
	"country": "NG",
	"type": "bank_account",
	"account_number": "0123456789",
	"bvn": "200123456677",
	"bank_code": "007",
	"first_name": "Asta",
	"last_name": "Lavista"
}'
-X POST