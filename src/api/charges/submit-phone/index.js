const https = require('https')

const params = JSON.stringify({
  "phone": "08012345678",
  "reference": "5bwib5v6anhe9xa"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/charge/submit_phone',
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