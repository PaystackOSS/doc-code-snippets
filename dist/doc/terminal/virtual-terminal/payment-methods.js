const gh_payment_method = `{
    "paymentMethods": [
        {
            "type": "mobile_money_ussd",
            "account_number": "*415*1548#"
        }
    ]
}
`

const ke_payment_method = `{
    "paymentMethods": [
        {
            "paystack_paybill_id": 25120781,
            "type": "paystack_paybill",
            "account_number": "93223",
            "account_name": "PAYSTACK - Paystack Demo",
            "bank": "M-Pesa Kenya"
        }
    ]
}
`

const ng_payment_method = `{
      "paymentMethods": [
        {
          "dedicated_nuban_id": 26196910,
          "type": "dedicated_nuban",
          "account_number": "9964842038",
          "account_name": "Paystack Demo/Sales Point #1",
          "bank": "Paystack-Titan"
        }
      ]
  }
  `

export {gh_payment_method, ke_payment_method, ng_payment_method}