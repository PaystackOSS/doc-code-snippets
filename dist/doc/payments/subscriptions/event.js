const json = `{
  "event": "charge.success",
  "data": {
    "id": 895091250,
    "domain": "test",
    "status": "success",
    "reference": "683e6787-7645-557a-a270-c9035c3a2b65",
    "amount": 110000,
    "message": null,
    "gateway_response": "Approved",
    "paid_at": "2020-11-23T11:00:09.000Z",
    "created_at": "2020-11-23T11:00:03.000Z",
    "channel": "card",
    "currency": "NGN",
    "ip_address": null,
    "metadata": { "invoice_action": "create" },
    "log": null,
    "fees": 1650,
    "fees_split": null,
    "authorization": {
      "authorization_code": "AUTH_v56svuyn23",
      "bin": "408408",
      "last4": "4081",
      "exp_month": "12",
      "exp_year": "2020",
      "channel": "card",
      "card_type": "visa ",
      "bank": "TEST BANK",
      "country_code": "NG",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_H8F4hDXIARayPS41IUwG",
      "account_name": null,
      "receiver_bank_account_number": null,
      "receiver_bank": null
    },
    "customer": {
      "id": 31352593,
      "first_name": "Test",
      "last_name": "Two",
      "email": "test2@live.com",
      "customer_code": "CUS_mfkew13owtwcmb2",
      "phone": "",
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": {
      "id": 60905,
      "name": "10% off first month",
      "plan_code": "PLN_a5vr5skxg72f4lr",
      "description": null,
      "amount": 110000,
      "interval": "monthly",
      "send_invoices": true,
      "send_sms": true,
      "currency": "NGN"
    },
    "subaccount": {},
    "split": {},
    "order_id": null,
    "paidAt": "2020-11-23T11:00:09.000Z",
    "requested_amount": 110000
  }
}`

export {json}