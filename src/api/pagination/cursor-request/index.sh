#!/bin/sh
use_cursor="true"
perPage="50"
url="https://api.paystack.co/transaction?use_cursor=$use_cursor&perPage=$perPage"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET