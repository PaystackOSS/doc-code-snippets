#!/bin/sh
url="https://api.paystack.co/dedicated_account/split"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
 "account_number": "0033322211" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X DELETE

