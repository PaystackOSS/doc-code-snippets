#!/bin/sh
url="https://api.paystack.co/customer/{id}/directdebit-mandate-authorizations"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET