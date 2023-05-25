#!/bin/sh
url="https://api.paystack.co/dedicated_account/:dedicated_account_id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X DELETE