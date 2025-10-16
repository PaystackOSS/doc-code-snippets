#!/bin/sh
url="https://api.paystack.co/refund/retry_with_customer_details/{id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "refund_account_details": {
    "currency": "NGN",
    "account_number": "1234567890",
    "bank_id": "9"
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST