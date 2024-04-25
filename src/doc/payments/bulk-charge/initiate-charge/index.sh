#!/bin/sh
url="https://api.paystack.co/bulkcharge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='[
  {
    "amount": 10000,
    "authorization": "AUTH_ncx8hews93",
    "reference": "my_reference_1"
  },
  {
    "amount": 15000,
    "authorization": "AUTH_200nvt70zo",
    "reference": "my_reference_2"
  },
  {
    "amount": 25000,
    "authorization": "AUTH_84bqxd3rkf",
    "reference": "my_reference_3"
  }
]'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST