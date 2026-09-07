const https = require('https')

const params = JSON.stringify({
  "email": "ravi@demo.com",
  "amount": 1000000,
  "currency": "NGN",
  "direct_debit": {
    "account": { "number": "0123456789", "bank_code": "057" },
    "address": { "street": "126 Joel Ogunnaike", "city": "Ikeja", "state": "Lagos", "country": "NG" },
    "phone": "+2348012345678"
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