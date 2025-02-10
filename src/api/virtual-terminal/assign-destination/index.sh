#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/destination/assign"
authorization="Authorization: Bearer SECRET_KEY"
content_type="Content-Type: application/json"
data='{
    "destinations": [
        {
            "target": "+2341234567890",
            "name": "Another one"
        }
    ]
}'

curl "$url" -H "$authorization" -H "$content_type" -X POST -d "$data"