#!/bin/sh
curl https://api.paystack.co/charge/submit_birthday \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "birthday": "1961-09-21", "reference": "5bwib5v6anhe9xa" }' \
  -X POST