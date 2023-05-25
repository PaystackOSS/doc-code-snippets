#!/bin/sh
url="https://api.paystack.co/integration/payment_session_timeout"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "timeout": 30 }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT