#!/bin/sh
url="https://api.paystack.co/transaction/timeline/{id_or_reference}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET