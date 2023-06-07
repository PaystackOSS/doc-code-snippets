const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000",
  "authorization_code": "AUTH_72btv547"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/charge_authorization',
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