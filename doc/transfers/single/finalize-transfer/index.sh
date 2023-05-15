curl https://api.paystack.co/transfer/finalize_transfer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "transfer_code": "TRF_vsyqdmlzble3uii", "otp": "928783" }'
-X POST
