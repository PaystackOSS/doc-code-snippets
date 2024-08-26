#!/bin/sh
url="https://api.paystack.co/split/:id/subaccount/remove"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "subaccount": "ACCT_eg4sob4590pq9vb"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST