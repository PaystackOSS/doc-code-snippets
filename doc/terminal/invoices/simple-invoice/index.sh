curl https://api.paystack.co/paymentrequest
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "customer": "CUS_gv2e6wdd0os1rd4",
      "amount": 40000,
      "description": "2-for-1 promo"
    }'
-X POST