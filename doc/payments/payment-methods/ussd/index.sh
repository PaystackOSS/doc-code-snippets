curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "some@body.nice", 
      "amount":"10000",
      "ussd": {
        "type": "737"
      },
      "metadata": {
        "custom_fields":[{
          "value": "makurdi",
          "display_name": "Donation for",
          "variable_name": "donation_for"
        }]
      }
    }'
-X POST