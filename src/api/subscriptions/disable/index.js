const https = require('https')

const params = JSON.stringify({
  "code": "SUB_vsyqdmlzble3uii",
  "token": "d7gofp6yppn3qz7"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subscription/disable',
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