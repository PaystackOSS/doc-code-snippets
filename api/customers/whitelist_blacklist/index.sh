#!/bin/sh
curl https://api.paystack.co/customer/set_risk_action \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-H "Content-Type: application/json" \
-d '{ "customer": "CUS_xr58yrr2ujlft9k", "risk_action": "allow" }' \
-X POST