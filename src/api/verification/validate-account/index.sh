#!/bin/sh
url="https://api.paystack.co/bank/validate"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "bank_code": "632005",
  "country_code": "ZA",
  "account_number": "0123456789",
  "account_name": "Ann Bron",
  "account_type": "personal",
  "document_type": "identityNumber",
  "document_number": "1234567890123"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST