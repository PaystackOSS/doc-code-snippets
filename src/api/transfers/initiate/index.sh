#!/bin/sh
url="https://api.paystack.co/transfer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "source": "balance",
  "amount": 100000,
  "recipient": "RCP_gd9vgag7n5lr5ix",
  "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68",
  "reason": "Bonus for the week"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST