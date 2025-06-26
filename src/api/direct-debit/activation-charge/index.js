const https = require('https')

const params = JSON.stringify({
	"customer_ids": [28958104, 983697220]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/directdebit/activation-charge',
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