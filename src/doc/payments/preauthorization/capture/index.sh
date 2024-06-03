curl https://api.paystack.co/preauthorization/capture
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "reference": "123-abc",
    "currency": "ZAR",
    "amount": "1000"
    }'
-X POST