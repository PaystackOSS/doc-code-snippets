curl https://api.paystack.co/transaction/charge_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "authorization_code" : "AUTH_12abc345de", "email": "mail@mail.com", 
      "amount": "300000", "split_code": "SPL_UO2vBzEqHW" }'
-X POST