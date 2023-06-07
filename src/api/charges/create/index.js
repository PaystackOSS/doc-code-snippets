const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "10000",
  "metadata": {
    "custom_fields": [
      {
        "value": "makurdi",
        "display_name": "Donation for",
        "variable_name": "donation_for"
      }
    ]
  },
  "bank":{
      "code": "057",
      "account_number": "0000000000"
  },
  "birthday": "1995-12-23"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/charge',
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