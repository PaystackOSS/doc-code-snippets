#!/bin/sh

url="https://api.paystack.co/charge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "email": "another@one.com", 
  "amount": "25000", 
  "bank_transfer": {
    "account_expires_at": "2023-09-12T13:10:00Z"
  } 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST