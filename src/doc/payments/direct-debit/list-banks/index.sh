#!/bin/sh
curl https://api.paystack.co/bank?available_for_direct_debit=true
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET