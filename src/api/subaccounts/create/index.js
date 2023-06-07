const https = require('https')

const params = JSON.stringify({
  "business_name": "Sunshine Studios",
  "settlement_bank": "044", 
  "account_number": "0193274682", 
  "percentage_charge": 18.2 
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subaccount',
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