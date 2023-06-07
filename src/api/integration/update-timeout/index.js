const https = require('https')

const params = JSON.stringify({
  "timeout": 30
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/payment_session_timeout',
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
