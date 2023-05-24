#!/bin/sh
curl https://api.paystack.co/customer/deactivate_authorization \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-H "Content-Type: application/json"  \
-d '{ "authorization_code": "AUTH_72btv547" }' \
-X POST