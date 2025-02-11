#!/bin/sh
url="https://api.paystack.co/virtual_terminal"
authorization="Authorization: Bearer SECRET_KEY"
content_type="Content-Type: application/json"
data='{
"name": "Sample Terminal",
"destinations": [
    {
    "target": "+27639022319",
    "name": "Phone Destination"
    }
]
}'

curl "$url" \
-H "$authorization" \
-H "$content_type" \
-X POST \
-d "$data"

