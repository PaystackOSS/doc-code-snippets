#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code"
authorization="Authorization: Bearer SECRET_KEY"

curl "$url" \
-H "$authorization" \
-X GET