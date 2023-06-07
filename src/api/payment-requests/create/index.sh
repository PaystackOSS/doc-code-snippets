#!/bin/sh
url="https://api.paystack.co/paymentrequest"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "description": "a test invoice",
      "line_items": [
        {"name": "item 1", "amount": 20000},
        {"name": "item 2", "amount": 20000}
      ],
      "tax": [
        {"name": "VAT", "amount": 2000}
      ],
      "customer": "CUS_xwaj0txjryg393b",
      "due_date": "2020-07-08"
    }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST