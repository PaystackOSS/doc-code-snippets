#!/bin/bash
curl https://api.paystack.co/bulkcharge/:id_or_code/charges \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-X GET