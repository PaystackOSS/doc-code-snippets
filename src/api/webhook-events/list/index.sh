#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events?status=Failed&limit=50"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET