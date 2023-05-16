curl https://api.paystack.co/split
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "name":"Percentage Split", 
      "type":"percentage", 
      "currency": "NGN",
      "subaccounts":[{
        "subaccount": "ACCT_z3x6z3nbo14xsil",
        "share": 20
    },
    {
        "subaccount": "ACCT_pwwualwty4nhq9d",
        "share": 30
    }], 
      "bearer_type":"subaccount", 
      "bearer_subaccount":"ACCT_hdl8abxl8drhrl3"
    }'
-X POST