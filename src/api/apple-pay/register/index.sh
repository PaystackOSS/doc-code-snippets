#!/bin/sh
url="https://api.paystack.co/apple-pay/domain"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "domainName": "example.com" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST