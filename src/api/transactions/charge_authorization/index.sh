#!/bin/sh
url="https://api.paystack.co/transaction/charge_authorization"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "email": "customer@email.com", 
  "amount": "20000", 
  "authorization_code": "AUTH_72btv547"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST