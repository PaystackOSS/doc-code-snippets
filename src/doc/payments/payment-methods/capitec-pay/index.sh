curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "amount": 1000,
      "email": "drew.john@email.com",
      "currency": "ZAR",
      "capitec_pay": {
        "identifier_key" : "CELLPHONE",
        "identifier_value" : "0812345678"
      }
    }'
-X POST