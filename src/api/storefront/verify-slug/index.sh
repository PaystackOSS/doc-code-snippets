#!/bin/sh
url="https://api.paystack.co/storefront/verify/my-storefront"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
