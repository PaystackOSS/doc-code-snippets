const https = require('https')

const params = JSON.stringify({
  "email" : "test@paystack.com",
    "currency": "ZAR",
    "amount": 1000,
    "authorization_code": "AUTH_dalhwqi5vw"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/preauthorization/reserve_authorization',
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