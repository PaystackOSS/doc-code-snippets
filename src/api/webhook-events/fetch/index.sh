#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events/665f1c2a9d1e4b0012a3c4d5"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET