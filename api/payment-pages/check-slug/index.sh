#!/bin/sh
url="https://api.paystack.co/page/check_slug_availability/:slug"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET