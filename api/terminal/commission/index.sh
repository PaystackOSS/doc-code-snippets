#!/bin/sh
url="https://api.paystack.co/terminal/commission_device"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "serial_number": "1111150412230003899"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST