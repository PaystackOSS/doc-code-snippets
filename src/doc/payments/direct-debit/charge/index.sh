#!/bin/sh
curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{
      "email": "ravi@demo.com",
      "amount": "1000000",
      "currency": "NGN",
      "direct_debit": {
        "account": { "number": "0123456789", "bank_code": "057" },
        "address": { "street": "126 Joel Ogunnaike", "city": "Ikeja", "state": "Lagos", "country": "NG" },
        "phone": "+2348012345678"
      }
    }'
-X POST