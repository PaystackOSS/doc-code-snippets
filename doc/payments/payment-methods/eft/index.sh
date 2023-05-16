curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{
      "amount": 5000,
      "currency": "ZAR",
      "email": "customer@email.com",
      "eft": {
        "provider": "ozow"
      }
}'
-X POST