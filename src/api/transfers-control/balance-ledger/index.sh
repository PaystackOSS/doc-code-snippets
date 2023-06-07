#!/bin/sh
url="https://api.paystack.co/balance/ledger"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET