curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "amount": 100,
      "email": "customer@email.com",
      "currency": "KES",
      "mobile_money": {
        "phone": "254700000000",
        "provider" : "mpesa_offline"
      }
    }'
-X POST