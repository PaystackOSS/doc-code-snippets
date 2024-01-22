#!/bin/sh
url="https://api.paystack.co/customer/authorization/deactivate"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "authorization_code": "AUTH_xxxIjkZVj5"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST