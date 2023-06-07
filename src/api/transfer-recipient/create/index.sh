#!/bin/sh
url="https://api.paystack.co/transferrecipient"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "type": "nuban",
  "name": "Tolu Robert",
  "account_number": "01000000010",
  "bank_code": "058",
  "currency": "NGN"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST