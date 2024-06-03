curl https://api.paystack.co/preauthorization/reserve_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "email" : "test@paystack.com",
      "currency": "ZAR",
      "amount": 1000,
      "authorization_code": "AUTH_dalhwqi5vw",
    }'
-X POST