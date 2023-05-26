#!/bin/sh
url="https://api.paystack.co/bank?pay_with_bank_transfer=true"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET