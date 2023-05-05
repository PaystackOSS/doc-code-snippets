const json = `{
  "event": "charge.success",
  "data": {
    "id": 53561,
    "domain": "live",
    "status": "success",
    "reference": "2ofkbk0yie6dvzb",
    "amount": 150000,
    "message": "madePayment",
    "gateway_response": "Payment successful",
    "paid_at": "2018-06-25T12:42:58.000Z",
    "created_at": "2018-06-25T12:38:59.000Z",
    "channel": "ussd",
    "currency": "NGN",
    "ip_address": "54.246.237.22, 162.158.38.185, 172.31.15.210",
    "metadata": "",
    "log": null,
    "fees": null,
    "fees_split": null,
    "authorization": {
      "authorization_code": "AUTH_4c6mhnmmeusp4yd",
      "bin": "XXXXXX",
      "last4": "XXXX",
      "exp_month": "05",
      "exp_year": "2018",
      "channel": "ussd",
      "card_type": "offline",
      "bank": "Guaranty Trust Bank",
      "country_code": "NG",
      "brand": "offline",
      "reusable": false,
      "signature": null,
      "account_name": null
    },
    "customer": {
      "id": 16200,
      "first_name": "John",
      "last_name": "Doe",
      "email": "customer@email.com",
      "customer_code": "CUS_bpy9ciomcstg55y",
      "phone": "",
      "metadata": null,
      "risk_action": "default"
    },
    "plan": {
      
    },
    "subaccount": {
      
    },
    "paidAt": "2018-06-25T12:42:58.000Z"
  }
}`

export { json }
