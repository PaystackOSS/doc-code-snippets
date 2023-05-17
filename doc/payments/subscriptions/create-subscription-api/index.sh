curl https://api.paystack.co/subscription
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "customer": "CUS_xxxxxxxxxx", "plan": "PLN_xxxxxxxxxx" }'
-X POST