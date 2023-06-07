#!/bin/sh
url="https://api.paystack.co/subaccount/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "primary_contact_email": "dafe@aba.com", 
  "percentage_charge": 18.9 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT