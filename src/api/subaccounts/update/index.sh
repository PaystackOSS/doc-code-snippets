#!/bin/sh
url="https://api.paystack.co/subaccount/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "business_name": "Oasis Global", 
  "description": "Provide IT services"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT