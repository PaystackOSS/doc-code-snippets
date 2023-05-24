#!/bin/sh
curl "https://api.paystack.co/bank/resolve?account_number=0022728151&bank_code=063" \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -X GET
