#!/bin/sh
curl https://api.paystack.co/customer/:code \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-H "Content-Type: application/json" \
-d '{ "first_name": "BoJack" }' \
-X PUT