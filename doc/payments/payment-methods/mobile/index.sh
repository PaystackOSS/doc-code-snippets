curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "amount": 100,
      "email": "customer@email.com",
      "currency": "GHS",
      "mobile_money": {
        "phone" : "0551234987",
        "provider" : "mtn"
      }
    }'
-X POST