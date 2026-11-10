const open_url = `{
  "status": true,
  "message": "Authorization initialized",
  "data": {
    "reference": "54eyym8uf802ycx",
    "status": "open_url",
    "redirect_url": "https://express.redirecturlcheckout.com"
  }
}
`

const pending_bank_transfer = `{
  "status": true,
  "message": "Authorization initialized",
  "data": {
    "reference": "54eyym8uf802ycx",
    "mandate": {
      "id": 3315722,
      "status": "pending",
      "isNew": true
    },
    "transferDetails": {
      "amount": "50.00",
      "account_number": "9880218357",
      "account_name": "NIBSS DIRECT DEBIT",
      "bank_name": "Paystack-Titan"
    },
    "status": "pending_bank_transfer"
  }
}
`

export {open_url, pending_bank_transfer}