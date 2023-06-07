const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000",
  "split": {
    "type": "flat",
    "bearer_type": "account",
    "subaccounts": [
      {
        "subaccount": "ACCT_pwwualwty4nhq9d",
        "share": 6000
      },
      {
        "subaccount": "ACCT_hdl8abxl8drhrl3",
        "share": 4000
      },
    ]
  } 
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()