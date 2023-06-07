#!/bin/sh
url="https://api.paystack.co/dispute/:id/upload_url?upload_filename=filename.ext"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET