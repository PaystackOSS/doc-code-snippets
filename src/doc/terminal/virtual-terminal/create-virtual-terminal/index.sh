#!/bin/sh

url="https://api.paystack.co/virtual_terminal"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "name": "Sales Point #1",
  "destinations": [
    {"target": "+2347081234567"}
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST