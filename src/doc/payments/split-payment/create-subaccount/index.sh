curl https://api.paystack.co/subaccount
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "business_name": "Oasis", 
      "bank_code": "058", 
      "account_number": "0123456047", 
      "percentage_charge": 30 
    }'
-X POST