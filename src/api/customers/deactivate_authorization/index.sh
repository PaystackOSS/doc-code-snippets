#!/bin/sh
url="https://api.paystack.co/customer/deactivate_authorization"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "authorization_code": "AUTH_72btv547"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST