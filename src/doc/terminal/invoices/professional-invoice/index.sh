curl https://api.paystack.co/paymentrequest
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "customer": "CUS_5lgv9bc41uw15pb",
      "description": "Invoice for Damilola",
      "line_items": [
        {"name": "Tripod stand", "amount": "2000000", "quantity": 1},
        {"name": "Lenses", "amount": "300000", "quantity": 1},
        {"name": "White Bulbs", "amount": "50000", "quantity": 5}
      ]
    }'
-X POST