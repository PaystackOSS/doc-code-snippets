#!/bin/sh
curl https://api.paystack.co/customer/{id}/directdebit-activation-charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
        "authorization_id" : 1069309917
    }'
-X PUT