#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "address": "Somewhere on earth"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT