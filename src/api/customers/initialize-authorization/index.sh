#!/bin/sh
url="https://api.paystack.co/customer/authorization/initialize"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "email": "ravi@demo.com",
  "channel": "direct_debit",
  "callback_url": "http://test.url.com"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST