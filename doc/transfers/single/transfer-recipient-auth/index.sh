curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "authorization", 
      "name": "Revs Ore", 
      "email": "revs@ore.com", 
      "authorization_code": "AUTH_ncx8hews93"
    }'
-X POST