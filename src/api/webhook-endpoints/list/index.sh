#!/bin/sh
url="https://api.paystack.co/integration/webhooks/endpoints?limit=20"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET