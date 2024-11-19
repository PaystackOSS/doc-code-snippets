#!/bin/sh
url="https://api.paystack.co/plan/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
    "name": "Monthly retainer (renamed)" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT