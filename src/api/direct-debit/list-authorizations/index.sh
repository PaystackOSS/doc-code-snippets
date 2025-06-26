#!/bin/sh
url="https://api.paystack.co/directdebit/mandate-authorizations"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET