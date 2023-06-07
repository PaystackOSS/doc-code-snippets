#!/bin/sh
url="https://api.paystack.co/transfer/resend_otp"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "transfer_code": "TRF_vsyqdmlzble3uii", 
  "reason": "resend_otp" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST