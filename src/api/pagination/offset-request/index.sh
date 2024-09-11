#!/bin/sh
page="1"
perPage="50"
url="https://api.paystack.co/transaction?page=$page&perPage=$perPage"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET