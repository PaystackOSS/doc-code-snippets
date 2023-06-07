#!/bin/sh
url="https://api.paystack.co/transferrecipient/bulk"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "batch": [
  {
    "type":"nuban",
    "name" : "Habenero Mundane",
    "account_number": "0123456789",
    "bank_code": "033",
    "currency": "NGN"
  },
  {
    "type":"nuban",
    "name" : "Soft Merry",
    "account_number": "98765432310",
    "bank_code": "50211",
    "currency": "NGN"
  }]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST