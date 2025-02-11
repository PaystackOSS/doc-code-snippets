#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/deactivate"
authorization="Authorization: Bearer SECRET_KEY"

curl "$url" \
-H "$authorization" \
-X PUT