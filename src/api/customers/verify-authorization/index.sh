#!/bin/sh
url="https://api.paystack.co/customer/authorization/verify/{reference}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET