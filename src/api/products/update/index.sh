#!/bin/sh
url="https://api.paystack.co/product/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "description": "Product Six Description", 
  "name": "Product Six",
  "price": 500000, 
  "currency": "USD", 
  "limited": false, 
  "quantity": 100 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT