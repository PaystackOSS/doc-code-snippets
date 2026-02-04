const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_abc123def456",
  "line_items": [
    {
      "product": 2196244,
      "quantity": 2
    }
  ]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/order',
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
