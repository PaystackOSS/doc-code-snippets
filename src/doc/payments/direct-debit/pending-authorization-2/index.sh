#!/bin/sh
curl https://api.paystack.co/directdebit/activation-charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
        "customer_ids": [28958104, 983697220]
    }'
-X PUT