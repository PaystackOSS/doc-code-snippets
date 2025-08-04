curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "nuban", 
      "name": "John Doe", 
      "account_number": "0001234567", 
      "bank_code": "058", 
      "currency": "NGN"
    }'
-X POST