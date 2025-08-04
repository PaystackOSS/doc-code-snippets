#!/bin/sh
curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "mobile_money_business",
      "name": "Till Transfer",
      "bank_code": "MPTILL",
      "account_number": "247247",
      "currency": "KES"
    }'
-X POST