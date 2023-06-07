#!/bin/sh
url="https://api.paystack.co/paymentrequest/verify/:code"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET