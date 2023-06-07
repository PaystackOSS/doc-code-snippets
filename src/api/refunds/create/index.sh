#!/bin/sh
url="https://api.paystack.co/refund"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "transaction": 1641 }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST