const customer_id_failed = `{
  "event":"customeridentification.failed",
  "data":{
    "customer_id":82796315,
    "customer_code":"CUS_XXXXXXXXXXXXXXX",
    "email":"email@email.com",
    "identification":{
      "country":"NG",
      "type":"bank_account",
      "bvn":"123*****456",
      "account_number":"012****345",
      "bank_code":"999991"
    },
    "reason":"Account number or BVN is incorrect"
  }
}`

const customer_id_success = `{
  "event": "customeridentification.success",
  "data": {
    "customer_id": "9387490384",
    "customer_code": "CUS_xnxdt6s1zg1f4nx",
    "email": "bojack@horsinaround.com",
    "identification": {
      "country": "NG",
      "type": "bvn",
      "value": "200*****677"
    }
  }
}`

const dva_assign_failed = `{
  "event":"dedicatedaccount.assign.failed",
  "data":{
    "customer": {
      "id": 100110,
      "first_name":"John",
      "last_name":"Doe",
      "email":"johndoe@test.com",
      "customer_code":"CUS_hcekca0j0bbg2m4",
      "phone":"+2348100000000",
      "metadata":{},
      "risk_action":"default",
      "international_format_phone":"+2348100000000"
    },
    "dedicated_account":null,
    "identification":{
      "status":"failed"
    }
  }
}`

const dva_assign_success = `{
  "event":"dedicatedaccount.assign.success",
  "data":{
    "customer":{
      "id": 100110,
      "first_name":"John",
      "last_name":"Doe",
      "email":"johndoe@test.com",
      "customer_code":"CUS_hp05n9khsqcesz2",
      "phone":"+2348100000000",
      "metadata":{},
      "risk_action":"default",
      "international_format_phone":"+2348100000000"
    },
    "dedicated_account":{
      "bank":{
        "name":"Test Bank",
        "id":20,
        "slug":"test-bank"
      },
      "account_name":"PAYSTACK/John Doe",
      "account_number":"1234567890",
      "assigned":true,
      "currency":"NGN",
      "metadata":null,
      "active":true,
      "id":987654,
      "created_at":"2022-06-21T17:12:40.000Z",
      "updated_at":"2022-08-12T14:02:51.000Z",
      "assignment":{
        "integration":100123,
        "assignee_id":100110,
        "assignee_type":"Customer",
        "expired":false,
        "account_type":"PAY-WITH-TRANSFER-RECURRING",
        "assigned_at":"2022-08-12T14:02:51.614Z",
        "expired_at":null
      }
    },
    "identification":{
      "status":"success"
    }
  }
}`

export {customer_id_failed, customer_id_success, dva_assign_failed, dva_assign_success}