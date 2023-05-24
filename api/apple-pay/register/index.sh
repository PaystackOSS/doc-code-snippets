<<<<<<< HEAD
const bash = curl https://api.paystack.co/apple-pay/domain
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "domainName": "example.com" }'
=======
#!/bin/bash
curl https://api.paystack.co/apple-pay/domain \
-H "Authorization: Bearer YOUR_SECRET_KEY" \
-H "Content-Type: application/json" \
-d '{ "domainName": "example.com" }' \
>>>>>>> 9336427ea1eae10f0613394aecc78faf0fa0402b
-X POST