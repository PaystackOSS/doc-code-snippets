curl https://api.paystack.co/refund
-H 'authorization: Bearer YOUR_SECRET_KEY'
-H 'cache-control: no-cache'
-H 'content-type: application/json'
-d '{ "transaction":"qufywna9w9a5d8v", "amount":"10000" }'
-X POST