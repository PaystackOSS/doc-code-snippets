#!/bin/sh
url="https://api.paystack.co/paymentrequest/totals"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization"  -X GET