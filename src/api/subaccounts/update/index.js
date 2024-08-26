const https = require('https')

const params = JSON.stringify({
  "business_name": "Oasis Global",
  "description": "Provide IT services"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subaccount/:id_or_code',
  method: 'PUT',
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