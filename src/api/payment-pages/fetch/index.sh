#!/bin/sh
url="https://api.paystack.co/page/:id_or_slug"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization"  -X GET