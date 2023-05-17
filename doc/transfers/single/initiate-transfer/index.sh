curl https://api.paystack.co/transfer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "source": "balance", 
      "amount": "37800",
      "reference": "your-unique-reference", 
      "recipient": "RCP_t0ya41mp35flk40", 
      "reason": "Holiday Flexing" 
    }'
-X POST
