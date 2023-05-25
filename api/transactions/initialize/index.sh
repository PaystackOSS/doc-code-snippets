#!/bin/sh
url="https://api.paystack.co/transaction/initialize"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "email": "customer@email.com", 
  "amount": "20000"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST