#!/bin/sh
curl https://api.paystack.co/customer/:email_or_code \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-X GET