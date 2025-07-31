const bank_transfer_rejected = `{
  "event": "bank.transfer.rejected",
  "data": {
    "bank_transfer": {
      "amount": "1000",
      "message": "incorrect amount sent",
      "message_type": "INCORRECT_AMOUNT",
      "transaction_id": "5195686331"
    },
    "customer": {
      "first_name": "Amanda",
      "last_name": "Bella",
      "email": "user@example.com",
      "phone": null,
      "metadata": null,
      "domain": "live",
      "customer_code": "CUS_174rg4huaihJka",
      "risk_action": "default",
      "id": 181595312,
      "integration": 741758,
      "createdAt": "2025-04-24T16:55:57.954Z",
      "updatedAt": "2025-04-24T16:55:57.954Z"
    }
  }
}`

const charge_successful = `{
  "event": "charge.success",
  "data": {
    "id": 519558290,
    "domain": "live",
    "status": "success",
    "reference": "uybxnzf71231",
    "amount": 1000,
    "message": null,
    "gateway_response": "Approved",
    "paid_at": "2025-06-21T11:11:27.000Z",
    "created_at": "2025-06-21T11:02:57.000Z",
    "channel": "bank_transfer",
    "currency": "KES",
    "ip_address": "172.68.67.162, 172.31.63.81",
    "metadata": 0,
    "fees_breakdown": {
      "amount": "15",
      "formula": null,
      "type": "paystack"
    },
    "log": null,
    "fees": 15,
    "fees_split": null,
    "authorization": {
      "authorization_code": "AUTH_9q100f8qle",
      "bin": "010XXX",
      "last4": "X607",
      "exp_month": "06",
      "exp_year": "2025",
      "channel": "bank_transfer",
      "card_type": "transfer",
      "bank": "Diamond Trust Bank Limited",
      "country_code": "KE",
      "brand": "Managed Account",
      "reusable": false,
      "signature": null,
      "account_name": null,
      "sender_country": "KE",
      "sender_bank": "Diamond Trust Bank Kenya Limited",
      "sender_bank_account_number": "XXXXXXX607",
      "sender_name": "ANN ABELL",
      "narration": null,
      "receiver_bank_account_number": "0123456789",
      "receiver_bank": "Diamond Trust Bank Kenya Ltd"
    },
    "customer": {
        "id": 181595312,
        "first_name": "Ann",
        "last_name": "Abell",
        "email": "user@example.com",
        "customer_code": "CUS_174rg4huaih38hk",
        "phone": null,
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
    },
    "plan": {},
    "subaccount": {},
    "split": {},
    "order_id": null,
    "paidAt": "2025-04-24T16:55:57.954Z",
    "requested_amount": 1000,
    "pos_transaction_data": null,
    "source": {
        "type": "api",
        "source": "merchant_api",
        "entry_point": "charge",
        "identifier": null
    }
  }
}`

export {bank_transfer_rejected, charge_successful}