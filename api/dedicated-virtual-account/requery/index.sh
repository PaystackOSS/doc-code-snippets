#!/bin/sh
accountNumber="1234567890"
providerSlug="example-provider"
date="2023-05-30"

curl "https://api.paystack.co/dedicated_account/requery?account_number=${accountNumber}&provider_slug=${providerSlug}&date=${date}" \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-H "Content-Type: application/json" \
-X GET