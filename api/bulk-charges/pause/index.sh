#!/bin/bash
curl https://api.paystack.co/bulkcharge/pause/:batch_code \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-X GET