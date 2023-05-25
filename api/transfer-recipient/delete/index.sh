#!/bin/sh
url="https://api.paystack.co/transferrecipient/{id_or_code}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X DELETE