#!/bin/sh
url="https://api.paystack.co/customer/{customer_code}/identification"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "country": "NG",
  "type": "bank_account",
  "account_number": "0123456789",
  "bvn": "20012345677",
  "bank_code": "007",
  "first_name": "Asta",
  "last_name": "Lavista"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST