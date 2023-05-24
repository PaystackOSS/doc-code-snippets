#!/bin/sh
curl https://api.paystack.co/charge \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "customer@email.com", \
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
          code: "057",
          account_number: "0000000000"
      },
      "birthday": "1995-12-23"
    }' \
  -X POST