#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}/presence"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET