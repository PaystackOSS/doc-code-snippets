#!/bin/sh
url="https://api.paystack.co/paymentrequest/archive/:id_or_code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"

curl "$url" -H "$authorization" -H "$content_type" -X POST