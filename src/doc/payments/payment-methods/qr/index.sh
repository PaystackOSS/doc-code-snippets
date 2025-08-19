curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "amount": 1000,
      "email": "customer@email.com",
      "currency": "ZAR",
      "qr": {
        "provider" : "scan-to-pay"
      }
    }'
-X POST