curl https://api.paystack.co/transaction/charge_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "authorization_code" : "AUTH_pmx3mgawyd", 
      email: "mail@mail.com", 
      amount: "300000" 
    }'
-X POST