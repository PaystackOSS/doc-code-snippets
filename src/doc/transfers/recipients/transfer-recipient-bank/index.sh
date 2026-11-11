curl https://api.paystack.co/transferrecipient \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-H "Content-Type: application/json" \
-d '{ "type": "nuban",
      "name": "John Doe",
      "account_number": "1000000001",
      "bank_code": "057",
      "currency": "NGN"
    }' \
-X POST