#!/bin/sh
curl https://api.paystack.co/balance
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET