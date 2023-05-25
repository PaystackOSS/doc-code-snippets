#!/bin/sh
url="https://api.paystack.co/charge/submit_phone"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "phone": "08012345678", 
  "reference": "5bwib5v6anhe9xa"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST