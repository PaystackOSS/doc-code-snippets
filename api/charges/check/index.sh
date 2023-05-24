#!/bin/sh
curl https://api.paystack.co/charge/:reference \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -X GET