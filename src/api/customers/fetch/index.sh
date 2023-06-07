#!/bin/sh
url="https://api.paystack.co/customer/{email_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET