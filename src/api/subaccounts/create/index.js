const https = require('https')

const params = JSON.stringify({
  "business_name": "Oasis",
  "settlement_bank": "058", 
  "account_number": "0123456047", 
  "percentage_charge": 30 
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