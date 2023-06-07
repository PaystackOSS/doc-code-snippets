curl https://api.paystack.co/terminal/:terminal_id/event
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "type": "invoice",
      "action": "process",
      "data": { 
        "id": 7895939, 
        "reference": 4634337895939
      }
    }'
-X POST