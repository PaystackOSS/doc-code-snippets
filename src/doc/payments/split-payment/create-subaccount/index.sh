curl https://api.paystack.co/subaccount
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "business_name": "Cheese Sticks", 
      "bank_code": "058", 
      "account_number": "0123456789", 
      "percentage_charge": 20 
    }'
-X POST