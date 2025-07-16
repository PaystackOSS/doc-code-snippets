#!/bin/sh

url="https://api.paystack.co/charge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "email": "user@example.com", 
  "amount": "10000", 
  "bank_transfer": {
    "account_expires_at": "2025-04-24T16:40:57.954Z"
  } 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST