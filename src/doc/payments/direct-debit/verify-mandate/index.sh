#!/bin/sh
curl https://api.paystack.co/customer/authorization/verify/:reference
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET