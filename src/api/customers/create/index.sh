#!/bin/sh
url="https://api.paystack.co/customer"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
    "email": "customer@example.com",
    "first_name": "Zero",
    "last_name": "Sum",
    "phone": "+2348123456789"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST