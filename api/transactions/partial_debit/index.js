const https = require('https')

const params = JSON.stringify({
  "authorization_code": "AUTH_72btv547",
  "currency": "NGN",
  "amount": "20000",
  "email": "customer@email.com"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/partial_debit',
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