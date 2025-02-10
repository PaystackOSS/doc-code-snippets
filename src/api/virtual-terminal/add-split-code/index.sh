#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/split_code"
authorization="Authorization: Bearer SECRET_KEY"
content_type="Content-Type: application/json"
data='{
    "split_code": "SPL_98WF13Zu8w5"
}'

curl "$url" -H "$authorization" -H "$content_type" -X PUT -d "$data"