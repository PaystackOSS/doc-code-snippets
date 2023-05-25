#!/bin/sh
url="https://api.paystack.co/integration/payment_session_timeout"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET