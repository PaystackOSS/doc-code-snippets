#!/bin/sh
url="https://api.paystack.co/integration/webhooks/endpoints/WHK_1a2b3c4d/ping"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST