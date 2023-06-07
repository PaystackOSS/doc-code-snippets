curl https://api.paystack.co/dedicated_account
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "customer": 481193, 
      "preferred_bank":"wema-bank", 
      "split_code": "SPL_e7jnRLtzla" 
    }'
-X POST