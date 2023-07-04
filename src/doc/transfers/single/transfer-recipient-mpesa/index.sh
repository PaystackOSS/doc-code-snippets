#!/bin/sh
curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "mobile_money", 
      "name": "Andrew Jones", 
      "account_number": "0751234987", 
      "bank_code": "MPESA", 
      "currency": "KES"
    }'
-X POST