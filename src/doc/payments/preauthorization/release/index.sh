curl https://api.paystack.co/preauthorization/release
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "reference": "123-abc"
    }'
-X POST