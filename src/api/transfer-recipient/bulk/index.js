const https = require('https')

const params = JSON.stringify({
  "batch": [
  {
    "type":"nuban",
    "name" : "Habenero Mundane",
    "account_number": "0123456789",
    "bank_code": "033",
    "currency": "NGN"
  },
  {
    "type":"nuban",
    "name" : "Soft Merry",
    "account_number": "98765432310",
    "bank_code": "50211",
    "currency": "NGN"
  }
]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transferrecipient/bulk',
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