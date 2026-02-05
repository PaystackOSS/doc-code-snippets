#!/bin/sh
url="https://api.paystack.co/storefront"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "name": "My Storefront",
  "slug": "my-storefront",
  "description": "A description of my storefront"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
