const https = require('https')

const params = JSON.stringify({
  "country": "NG",
  "type": "bank_account",
  "account_number": "0123456789",
  "bvn": "20012345677",
  "bank_code": "007",
  "first_name": "Asta",
  "last_name": "Lavista"

})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer/{customer_code}/identification',
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