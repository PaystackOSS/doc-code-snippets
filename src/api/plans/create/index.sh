#!/bin/sh
url="https://api.paystack.co/plan"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "name": "Monthly retainer", 
  "interval": "monthly", 
  "amount": "500000" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST