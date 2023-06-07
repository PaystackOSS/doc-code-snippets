curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "mobile_money", 
      "name": "Abina Nana", 
      "account_number": "0551234987", 
      "bank_code": "MTN", 
      "currency": "GHS"
    }'
-X POST