curl https://api.paystack.co/dedicated_account/assign
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "email": "janedoe@test.com",
      "first_name": "Jane",
      "middle_name": "Karen",
      "last_name": "Doe",
      "phone": "+2348100000000",
      "preferred_bank": "test-bank",
      "country": "NG",
      "account_number": "0123456789",
      "bvn": "20012345678",
      "bank_code": "007"
}'
-X POST