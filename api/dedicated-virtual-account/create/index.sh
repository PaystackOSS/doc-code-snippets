#!/bin/sh
url="https://api.paystack.co/dedicated_account"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "customer": 481193, 
        "preferred_bank":"wema-bank"
      }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST