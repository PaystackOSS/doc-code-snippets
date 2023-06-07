#!/bin/sh
url="https://api.paystack.co/charge/submit_pin"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "pin": "1234", 
  "reference": "5bwib5v6anhe9xa"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST