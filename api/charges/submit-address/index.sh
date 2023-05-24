#!/bin/sh
curl https://api.paystack.co/charge/submit_address \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "reference": "7c7rpkqpc0tijs8", \
      "address": "140 N 2ND ST",
      "city": "Stroudsburg",
      "state": "PA",
      "zip_code": "18360"
    }' \
  -X POST