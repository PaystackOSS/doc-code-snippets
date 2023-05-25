#!/bin/sh
curl https://api.paystack.co/dedicated_account/:dedicated_account_id \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-X DELETE