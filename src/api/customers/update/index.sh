#!/bin/sh
url="https://api.paystack.co/customer/{code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "first_name": "BoJack"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT