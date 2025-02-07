curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "amount": 100,
      "email": "customer@email.com",
      "currency": "KES",
      "mobile_money": {
        "account" : "1234567",
        "provider" : "mptill"
      }
    }'
-X POST