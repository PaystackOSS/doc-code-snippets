curl https://api.paystack.co/transfer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
  "source": "balance",
  "amount": 100000,
  "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68",
  "recipient": "RCP_gd9vgag7n5lr5ix",
  "reason": "Bonus for the week"
}'
-X POST
