#!/bin/sh
url="https://api.paystack.co/order"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "customer": "CUS_abc123def456",
  "line_items": [
    {
      "product": 2196244,
      "quantity": 2
    }
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
