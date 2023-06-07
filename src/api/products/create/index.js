const https = require('https')

const params = JSON.stringify({
  "name": "Puff Puff",
  "description": "Crispy flour ball with fluffy interior",
  "price": "5000",
  "currency": "NGN",
  "unlimited": false,
  "quantity": 100
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/product',
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