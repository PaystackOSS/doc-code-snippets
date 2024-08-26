#!/bin/sh
url="https://api.paystack.co/split/{id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "bearer_type": "all-proportional"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT