curl https://api.paystack.co/bank/validate
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "bank_code": "632005",
      "country_code": "ZA",
      "account_number": "0123456789",
      "account_name": "Ann Bron",
      "account_type": "personal",
      "document_type": "identityNumber",
      "document_number": "1234567890123"
    }'
-X POST