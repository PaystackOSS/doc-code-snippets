#!/bin/sh
url="https://api.paystack.co/dedicated_account/available_providers"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET