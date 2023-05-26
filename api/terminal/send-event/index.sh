#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}/event"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "type": "invoice",
  "action": "process",
  "data": { 
    "id": 7895939, 
    "reference": 4634337895939
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST