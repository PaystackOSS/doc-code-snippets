curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "10000", 
      "bank": {
        "code": "057", 
        "account_number": "0000000000" 
      }
    }'
-X POST