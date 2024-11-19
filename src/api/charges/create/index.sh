#!/bin/sh
url="https://api.paystack.co/charge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "email": "customer@email.com",
  "amount": "10000",
  "metadata": {
    "custom_fields": [
      {
        "value": "makurdi",
        "display_name": "Donation for",
        "variable_name": "donation_for"
      }
    ]
  },
  "bank": {
      "code": "057",
      "account_number": "0000000000"
  },
  "birthday": "1995-12-23"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST