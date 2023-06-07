curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "10000", 
      "bank": {
        "code": "057", 
        "phone": "+23481234567890",
        "token": "123456"
      }
    }'
-X POST
