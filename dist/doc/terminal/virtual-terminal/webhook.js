const json = `{
  "event": "charge.success",
  "data": {
    "id": 4677002219,
    "domain": "test",
    "status": "success",
    "reference": "T173424527684156",
    "amount": 10000,
    "message": null,
    "gateway_response": "Successful",
    "paid_at": "2025-02-11T10:42:20.000Z",
    "created_at": "2025-02-11T10:42:03.000Z",
    "channel": "card",
    "currency": "KES",
    "ip_address": "129.222.206.7",
    "metadata": {
      "virtual_terminal": { "code": "VT_68SBY77G" },
      "referrer": "https://paystack.shop/pay/vt_68sby77g"
    },
    "fees_breakdown": null,
    "log": null,
    "fees": 290,
    "fees_split": null,
    "authorization": {
      "authorization_code": "AUTH_7k5skwmhxu",
      "bin": "408408",
      "last4": "4081",
      "exp_month": "12",
      "exp_year": "2030",
      "channel": "card",
      "card_type": "visa ",
      "bank": "TEST BANK",
      "country_code": "KE",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_C9LhIPX2mQ8uckT6In2U",
      "account_name": null,
      "receiver_bank_account_number": null,
      "receiver_bank": null
    },
    "customer": {
      "id": 239551424,
      "first_name": "",
      "last_name": "",
      "email": "h0e5lcb0f0tnqrmixoqa@paystackdemoke-vt.com",
      "customer_code": "CUS_edn4wbf00pcot1p",
      "phone": "",
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": {},
    "subaccount": {},
    "split": {},
    "order_id": null,
    "paidAt": "2025-02-11T10:42:20.000Z",
    "requested_amount": 10000,
    "pos_transaction_data": null,
    "source": {
      "type": "offline",
      "source": "virtual_terminal",
      "entry_point": "request_inline",
      "identifier": "VT_68SBY77G"
    }
  }
}
`

export {json}