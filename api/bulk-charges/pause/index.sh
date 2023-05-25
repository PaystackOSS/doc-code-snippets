#!/bin/sh
url="https://api.paystack.co/bulkcharge/pause/{batch_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET