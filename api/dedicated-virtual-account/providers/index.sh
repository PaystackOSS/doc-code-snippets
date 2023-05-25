#!/bin/sh
curl https://api.paystack.co/dedicated_account/available_providers \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-X GET