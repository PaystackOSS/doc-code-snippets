#!/bin/sh
accountNumber="1234567890"
providerSlug="example-provider"
date="2023-05-30"

url="https://api.paystack.co/dedicated_account/requery?account_number=$accountNumber&provider_slug=$providerSlug&date=$date"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"

curl "$url" -H "$authorization" -H "$content_type" -X GET