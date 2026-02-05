#!/bin/sh
url="https://api.paystack.co/order/ORD_abc123def456/validate"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
