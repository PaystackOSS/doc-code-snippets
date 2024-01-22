#!/bin/sh
curl https://api.paystack.co/customer/authorization/deactivate
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "authorization_code": "AUTH_xxxIjkZVj5"
    }'
-X POST