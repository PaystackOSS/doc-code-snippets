const https = require('https')

const params = JSON.stringify({
  "bank_code": "632005",
  "country_code": "ZA",
  "account_number": "0123456789",
  "account_name": "Ann Bron",
  "account_type": "personal",
  "document_type": "identityNumber",
  "document_number": "1234567890123"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bank/validate',
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