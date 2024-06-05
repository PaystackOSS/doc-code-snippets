curl https://api.paystack.co/preauthorization/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "500000",
      "currency": "ZAR"
    }'
-X POST