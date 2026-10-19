const https = require('https')

const params = JSON.stringify({
  "enabled": false
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/endpoints/WHK_1a2b3c4d',
  method: 'PATCH',
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