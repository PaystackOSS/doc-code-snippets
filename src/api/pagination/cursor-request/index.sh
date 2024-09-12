#!/bin/sh
url="https://api.paystack.co/transaction?use_cursor=true&perPage=50"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET