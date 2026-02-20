#!/bin/sh
url="https://api.paystack.co/capitec-pay/requery/{ref}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET