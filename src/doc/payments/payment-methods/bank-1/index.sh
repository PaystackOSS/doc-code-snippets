curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "10000", 
      "bank": {
        "code": "50211", 
        "phone": "+2348100000000",
        "token": "123456"
      }
    }'
-X POST
