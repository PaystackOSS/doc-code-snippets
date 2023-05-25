#!/bin/sh
url="https://api.paystack.co/transfer/disable_otp_finalize"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "otp": "928783" }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST