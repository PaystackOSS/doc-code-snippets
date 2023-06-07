#!/bin/sh
url="https://api.paystack.co/split/{id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "name": "Newness", 
  "active": true
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT