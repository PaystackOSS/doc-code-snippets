#!/bin/sh
url="https://api.paystack.co/bulkcharge/{id_or_code}/charges"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET