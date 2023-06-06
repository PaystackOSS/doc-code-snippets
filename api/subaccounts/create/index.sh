#!/bin/sh
url="https://api.paystack.co/subaccount"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "business_name": "Sunshine Studios", "settlement_bank": "044", "account_number": "0193274682", "percentage_charge": 18.2 }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST





