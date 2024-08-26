#!/bin/sh
url="https://api.paystack.co/split"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "name":"Halfsies", 
  "type":"percentage", 
  "currency": "NGN",
  "subaccounts":[{
    "subaccount": "ACCT_6uujpqtzmnufzkw",
    "share": 50
  }]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST