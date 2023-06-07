#!/bin/sh
url="https://api.paystack.co/bulkcharge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  [
    {"authorization": "AUTH_ncx8hews93", "amount": 2500, "reference": "dam1266638dhhd"}, 
    {"authorization": "AUTH_xfuz7dy4b9", "amount": 1500, "reference": "dam1266638dhhe"}
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST