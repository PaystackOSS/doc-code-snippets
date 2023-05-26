#!/bin/sh
url="https://api.paystack.co/dispute/:id/resolve"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "resolution": "merchant-accepted",
        "message": "Merchant accepted", 
        "uploaded_filename": "qesp8a4df1xejihd9x5q", 
        "refund_amount": 1002 
     }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT