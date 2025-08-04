#!/bin/sh
url="https://api.paystack.co/transfer/bulk"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "currency": "NGN",
  "source": "balance",
  "transfers": [
    {
      "amount": 20000,
      "reference": "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
      "reason": "Bonus for the week",
      "recipient": "RCP_gd9vgag7n5lr5ix"
    },
    {
      "amount": 35000,
      "reference": "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
      "reason": "Bonus for the week",
      "recipient": "RCP_zpk2tgagu6lgb4g"
    },
    {
      "amount": 15000,
      "reference": "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
      "reason": "Bonus for the week",
      "recipient": "RCP_dfznnod8rwxlwgn"
    }
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST