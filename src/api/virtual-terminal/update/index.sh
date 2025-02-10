#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code"
authorization="Authorization: Bearer SECRET_KEY"
content_type="Content-Type: application/json"
data='{
    "name": "New terminal name"
}'

curl "$url" -H "$authorization" -H "$content_type" -X PUT -d "$data"