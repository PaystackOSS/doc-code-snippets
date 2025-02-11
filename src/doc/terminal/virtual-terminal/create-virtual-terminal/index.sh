curl "https://api.paystack.co/virtual_terminal"
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{
  "name": "Sales Point #1",
  "destinations": [
    {"target": "+2347081234567"}
  ]
}'
-X POST