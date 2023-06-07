#!/bin/sh
url="https://api.paystack.co/customer/set_risk_action"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "customer": "CUS_xr58yrr2ujlft9k", 
  "risk_action": "allow"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST