#!/bin/sh
url="https://api.paystack.co/decision/bin/539983"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET