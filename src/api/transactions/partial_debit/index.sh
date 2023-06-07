#!/bin/sh
url="https://api.paystack.co/transaction/partial_debit"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "authorization_code": "AUTH_72btv547", 
  "currency": "NGN", 
  "amount": "20000",
  "email": "customer@email.com"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST