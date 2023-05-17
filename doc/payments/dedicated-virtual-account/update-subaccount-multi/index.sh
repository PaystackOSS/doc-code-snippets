curl https://api.paystack.co/dedicated_account/split
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "account_number": "0033322211", "split_code": "SPL_e7jnRLtzla" }'
-X POST