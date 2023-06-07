#!/bin/sh
url="https://api.paystack.co/page"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
   "name": "Buttercup Brunch", 
   "amount": 500000,
   "description": "Gather your friends for the ritual that is brunch",
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST