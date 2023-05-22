#!/bin/bash
curl https://api.paystack.co/apple-pay/domain \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-H "Content-Type: application/json" \
-d '{ "domainName": "example.com" }' \
-X POST