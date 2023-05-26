#!/bin/sh
url="https://api.paystack.co/subscription/disable"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "code": "SUB_vsyqdmlzble3uii", 
  "token": "d7gofp6yppn3qz7" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST