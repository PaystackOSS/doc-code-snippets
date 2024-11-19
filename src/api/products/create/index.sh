#!/bin/sh
url="https://api.paystack.co/product"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "name": "Puff Puff",
  "description": "Crispy flour ball with fluffy interior",
  "price": "5000",
  "currency": "NGN",
  "unlimited": false,
  "quantity": 100
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST