curl https://api.paystack.co/plan
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "name": "Monthly Retainer", 
      "interval": "monthly", 
      "amount": 500000
    }'
-X POST