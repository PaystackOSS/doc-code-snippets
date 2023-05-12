curl https://api.paystack.co/transfer/bulk
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{
  "currency": "NGN",
  "source": "balance",
  "transfers": [
    {
      "amount": 20000,
      "reference": "588YtfftReF355894J",
      "reason": "Why not?",
      "recipient": "RCP_2tn9clt23s7qr28"
    },
    {
      "amount": 30000,
      "reference": "YunoTReF35e0r4J",
      "reason": "Because I can",
      "recipient": "RCP_1a25w1h3n0xctjg"
    },
    {
      "amount": 40000,
      "reason": "Coming right up",
      "recipient": "RCP_aps2aibr69caua7"
    }
  ]
}'
-X POST