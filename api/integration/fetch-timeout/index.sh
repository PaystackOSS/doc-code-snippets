#!/bin/sh
curl https://api.paystack.co/integration/payment_session_timeout \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-X GET