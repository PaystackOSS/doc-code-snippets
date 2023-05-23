#!/bin/sh
curl https://api.paystack.co/bulkcharge/:id_or_code \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-X GET