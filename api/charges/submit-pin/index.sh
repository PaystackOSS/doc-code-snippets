#!/bin/sh
curl https://api.paystack.co/charge/submit_pin \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "pin": "1234", "reference": "5bwib5v6anhe9xa" }' \
  -X POST