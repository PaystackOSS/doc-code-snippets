#!/bin/sh
url="https://api.paystack.co/page/:id/product"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "product": [473, 292] }'


curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST