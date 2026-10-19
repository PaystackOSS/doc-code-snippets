#!/bin/sh
url="https://api.paystack.co/integration/webhooks/endpoints"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "name": "Order fulfillment",
  "url": "https://example.com/webhooks/paystack",
  "events": [
    "charge.success",
    "charge.failed"
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST