#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events/resend"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "ids": ["665f1c2a9d1e4b0012a3c4d5", "665a0b119d1e4b0012a3bd90"]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST