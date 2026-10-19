#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events-catalog"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET