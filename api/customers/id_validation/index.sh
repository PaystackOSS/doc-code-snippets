#!/bin/sh

API_URL="https://api.paystack.co/customer/{customer_code}/identification"
SECRET_KEY="YOUR_SECRET_KEY"

# Make POST request using curl
curl -X POST "$API_URL" \
-H "Authorization: Bearer $SECRET_KEY" \
-H "Content-Type: application/json" \
-d '{
  "country": "NG",
  "type": "bank_account",
  "account_number": "0123456789",
  "bvn": "20012345677",
  "bank_code": "007",
  "first_name": "Asta",
  "last_name": "Lavista"
}'