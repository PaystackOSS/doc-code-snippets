#!/bin/sh
url="https://api.paystack.co/transferrecipient/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "name": "Rick Sanchez" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT