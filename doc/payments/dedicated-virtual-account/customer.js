const json = `{
  "status": true,
  "message": "Customer retrieved",
  "data": {
    "transactions": [],
    "subscriptions": [],
    "authorizations": [],
    "first_name": "Rhoda",
    "last_name": "Church",
    "email": "rhodachurch@email.com",
    "phone": "08154211006",
    "domain": "live",
    "customer_code": "CUS_dy1r7ts03zstbq5",
     ...
    "dedicated_account": {
      "bank": {
        "name": "Wema Bank",
        "id": 20,
        "slug": "wema-bank"
      },
      "id": 173,
      "account_name": "KAROKART/RHODA CHURCH",
      "account_number": "9930020212",
      "created_at": "2019-12-09T13:31:38.000Z",
      "updated_at": "2019-12-09T16:04:25.000Z",
      "currency": "NGN",
      "active": true,
      "assigned": true,
      "assignment": {
        "assignee_id": 1530104,
        "assignee_type": "Integration",
        "account_type": "PAY-WITH-TRANSFER-RECURRING",
        "integration": 100043
      }
    }
  }
}`

export { json }