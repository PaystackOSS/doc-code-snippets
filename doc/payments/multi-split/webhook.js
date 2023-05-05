const json = `{
  "event": "charge.success",
  "data": {
    "id": 697123356,
    "domain": "live",
    "status": "success",
    "reference": "12k81tq3my",
    "amount": 10000,
    "message": null,
    "gateway_response": "Approved",
    "paid_at": "2020-05-28T13:54:57.000Z",
    ...
    "split": {
      "id": 10,
      "name": "Example Split",
      "split_code": "SPL_98WF13Eekw",
      "formula": {
        "type": "percentage",
        "subaccounts": [
            {
              "share": 20,
              "subaccount_code": "ACCT_zpu16k4uhxycmxu",
              "id": 12850,
              "name": "Ayobami UBA"
            }
        ],
        "integration": 80
      },
      "shares": {
        "paystack": 140,
        "subaccounts": [
          {
            "amount": 2000,
            "subaccount_code": "ACCT_zpu16k4uhxycmxu",
            "id": 12850
          }
        ],
        "integration": 7860
      }
    },
    ...
  }
}`

export { json }
