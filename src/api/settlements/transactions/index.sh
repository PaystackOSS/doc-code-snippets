#!/bin/sh
url="https://api.paystack.co/settlement/:id/transactions"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET