#!/bin/sh
curl https://api.paystack.co/customer/authorization/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
        "email": "ravi@demo.com",
        "channel": "direct_debit",
        "callback_url": "http://test.url.com"
    }'
-X POST