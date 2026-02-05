#!/bin/sh
url="https://api.paystack.co/storefront/1559046"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "name": "Updated Storefront Name",
  "description": "An updated description"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT
