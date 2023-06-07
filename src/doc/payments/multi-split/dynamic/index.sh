curl https://api.paystack.co/transaction/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "20000", 
      "split": {
        "type": "flat",
        "bearer_type": "account",
        "subaccounts": [
          {
            "subaccount": "ACCT_pwwualwty4nhq9d",
            "share": 6000
          },
          {
            "subaccount": "ACCT_hdl8abxl8drhrl3",
            "share": 4000
          },
        ]
      } 
}'
-X POST