curl https://api.paystack.co/transaction/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "20000",
      "subaccount": "ACCT_xxxxxxxxx", 
      "transaction_charge": 10000 
    }'
-X POST