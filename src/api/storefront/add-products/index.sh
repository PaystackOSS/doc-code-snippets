#!/bin/sh
url="https://api.paystack.co/storefront/1559046/product"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "products": [2196244, 2196245]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
