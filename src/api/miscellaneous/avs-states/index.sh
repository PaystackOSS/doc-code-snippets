#!/bin/sh
url="https://api.paystack.co/address_verification/states?country=CA"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET