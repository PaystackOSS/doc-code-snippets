#!/bin/sh
curl https://api.paystack.co/charge/submit_otp \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "otp": "123456", "reference": "5bwib5v6anhe9xa" }' \
  -X POST