#!/bin/sh
url="https://api.paystack.co/order/12345"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
