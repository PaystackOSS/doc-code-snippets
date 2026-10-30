const https = require('https')

const params = JSON.stringify({
  "transaction": "T123456789",
  "amount": 5000,
  "reference": "my-refund-001"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/refund',
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