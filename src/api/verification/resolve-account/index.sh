#!/bin/sh
url="https://api.paystack.co/bank/resolve?account_number=0022728151&bank_code=063"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET