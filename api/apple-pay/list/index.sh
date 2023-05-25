#!/bin/sh
url="https://api.paystack.co/apple-pay/domain"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET