const https = require('https')

const params = JSON.stringify({
  "name": "Buttercup Brunch",
  "description": "Gather your friends for the ritual that is brunch",
  "amount": 500000
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/page',
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