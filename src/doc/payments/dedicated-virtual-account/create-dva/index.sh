curl https://api.paystack.co/dedicated_account
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "customer": "CUS_358xertt55", "preferred_bank": "titan-paystack"}'
-X POST