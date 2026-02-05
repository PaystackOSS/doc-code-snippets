#!/bin/sh
url="https://api.paystack.co/order/product/2196244"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
