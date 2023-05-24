#!/bin/sh
curl https://api.paystack.co/charge/submit_phone \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "phone": "08012345678", "reference": "5bwib5v6anhe9xa" }' \
  -X POST