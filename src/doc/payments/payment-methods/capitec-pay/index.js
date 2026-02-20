const https = require('https')

const params = JSON.stringify({
  "email": "drew.john@mail.com",
  "amount": 1000,
  "currency": "ZAR",
  "capitec_pay": {
    "identifier_key": "CELLPHONE",
    "identifier_value": "0812345678"
  }
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