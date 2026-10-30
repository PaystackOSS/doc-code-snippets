curl https://api.paystack.co/refund
-H 'authorization: Bearer YOUR_SECRET_KEY'
-H 'cache-control: no-cache'
-H 'content-type: application/json'
-d '{ "transaction":"T123456789", "amount":5000, "reference":"my-refund-001" }'
-X POST