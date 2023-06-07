#!/bin/sh
url="https://api.paystack.co/paymentrequest/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "description": "Update test invoice", 
  "due_date": "2017-05-10" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT