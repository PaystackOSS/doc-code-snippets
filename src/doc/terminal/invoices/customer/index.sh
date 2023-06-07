curl https://api.paystack.co/customer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "zero@sum.com"
      "first_name": "Zero",
      "last_name": "Sum",
      "phone": "+2348123456789"
    }'
-X POST