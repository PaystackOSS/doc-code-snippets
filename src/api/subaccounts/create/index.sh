#!/bin/sh
url="https://api.paystack.co/subaccount"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "business_name": "Oasis", 
  "settlement_bank": "058", 
  "account_number": "0123456047", 
  "percentage_charge": 30 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST