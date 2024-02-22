curl https://api.paystack.co/transaction/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", "amount": "20000",
    "callback_url":"https://hello.pstk.xyz/callback",
    "metadata":{"cancel_action": "https://your-cancel-url.com"} 
    }'
-X POST