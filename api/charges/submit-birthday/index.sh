#!/bin/sh
url="https://api.paystack.co/charge/submit_birthday"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "birthday": "1961-09-21", 
  "reference": "5bwib5v6anhe9xa"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST