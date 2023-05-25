#!/bin/sh
url="https://api.paystack.co/charge/submit_address"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "reference": "7c7rpkqpc0tijs8",
  "address": "140 N 2ND ST",
  "city": "Stroudsburg",
  "state": "PA",
  "zip_code": "18360"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST