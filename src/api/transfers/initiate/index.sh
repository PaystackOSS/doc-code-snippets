#!/bin/sh
url="https://api.paystack.co/transfer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "source": "balance", 
  "reason": "Calm down", 
  "amount":3794800, 
  "recipient": "RCP_gx2wn530m0i3w3m"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST