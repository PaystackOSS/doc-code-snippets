#!/bin/sh
url="https://api.paystack.co/integration/webhooks/endpoints/WHK_1a2b3c4d"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "enabled": false
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PATCH