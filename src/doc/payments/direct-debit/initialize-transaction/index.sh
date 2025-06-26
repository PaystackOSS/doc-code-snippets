curl https://api.paystack.co/transaction/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "10000", 
      "channels": ["bank"],
      "metadata": {
        "custom_filters": {
          "recurring": true
        }
      }
    }'
-X POST