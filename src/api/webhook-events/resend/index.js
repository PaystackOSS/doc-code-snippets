const https = require('https')

const params = JSON.stringify({
  "ids": ["665f1c2a9d1e4b0012a3c4d5", "665a0b119d1e4b0012a3bd90"]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/events/resend',
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