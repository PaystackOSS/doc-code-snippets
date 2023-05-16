const failed = `{
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

const success = `{
  "event": "customeridentification.success",
  "data": {
    "customer_id": "9387490384",
    "customer_code": "CUS_xnxdt6s1zg1f4nx",
    "email": "bojack@horsinaround.com",
    "identification": {
      "country": "NG",
      "type": "bank_account",
      "bvn": "200*****677",
      "account_number": "012****789",
      "bank_code": "007"
    }
  }
}`

export {failed, success}