#!/bin/sh
url="https://api.paystack.co/subscription"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "customer": "CUS_xnxdt6s1zg1f4nx", 
  "plan": "PLN_gx2wn530m0i3w3m"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST