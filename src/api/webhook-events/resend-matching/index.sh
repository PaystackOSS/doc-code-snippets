#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events/resend-matching"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "filters": {
    "status": "Failed",
    "category": "transactions",
    "event_type": "charge.success",
    "from": "2026-07-01",
    "to": "2026-07-09"
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST