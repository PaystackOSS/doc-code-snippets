#!/bin/sh
url="https://api.paystack.co/dispute/:id/evidence"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "customer_email": "cus@gmail.com",
      "customer_name": "Mensah King",
      "customer_phone": "0802345167",
      "service_details": "claim for buying product",
      "delivery_address": "3a ladoke street ogbomoso"
    }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST