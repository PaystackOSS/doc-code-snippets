const https = require('https')

const params = JSON.stringify({
  "amount": 100,
  "email": "customer@email.com",
  "currency": "KES",
  "mobile_money": { 
    "account" : "1234567",
    "provider" : "mptill"
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