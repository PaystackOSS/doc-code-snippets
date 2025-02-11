#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/destination/unassign"
authorization="Authorization: Bearer SECRET_KEY"
content_type="Content-Type: application/json"
data='{
    "targets": ["+2348123456789"]
}'
curl "$url" -H "$authorization" -H "$content_type" -X POST -d "$data"