#!/bin/sh
url="https://api.paystack.co/dedicated_account"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
      "email": "janedoe@test.com",
      "first_name": "Jane",
      "middle_name": "Karen",
      "last_name": "Doe",
      "phone": "+2348100000000",
      "preferred_bank": "test-bank",
      "country": "NG"
    }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST