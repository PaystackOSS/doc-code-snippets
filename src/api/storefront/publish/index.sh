#!/bin/sh
url="https://api.paystack.co/storefront/1559046/publish"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST
