curl https://api.paystack.co/paymentrequest
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "customer": "CUS_5lgv9bc41uw15pb",
      "description": "Invoice for Damilola",
      "line_items": [
        { "name": "Pancakes and sausage", "amount": "2000", "quantity": 1 },
        { "name": "Chicken Salad", "amount": "3000", "quantity": 1 }
      ]
    }'
-X POST