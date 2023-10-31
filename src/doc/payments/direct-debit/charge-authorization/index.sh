#!/bin/sh
curl https://api.paystack.co/transaction/charge_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "authorization_code" : "AUTH_JV4T9Wawdj", 
      "email": "ravi@demo.com", 
      "amount": "10000",
      "currency": "NGN"
    }'
-X POST