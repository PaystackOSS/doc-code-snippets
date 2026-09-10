#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events/lookup?reference=4045667488"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET