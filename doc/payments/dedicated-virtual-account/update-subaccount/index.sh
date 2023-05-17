curl https://api.paystack.co/dedicated_account/split
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "account_number": "0033322211", "subaccount": "SUB_ACCOUNTCODE" }'
-X POST