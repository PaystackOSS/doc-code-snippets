const https = require('https')

const params = JSON.stringify({
  "reference": "7c7rpkqpc0tijs8",
  "address": "140 N 2ND ST",
  "city": "Stroudsburg",
  "state": "PA",
  "zip_code": "18360"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/charge/submit_address',
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