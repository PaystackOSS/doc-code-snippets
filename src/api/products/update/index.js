const https = require('https')

const params = JSON.stringify({
  "description": "Product Six Description",
  "name": "Product Six",
  "price": 500000,
  "currency": "USD",
  "limited": false,
  "quantity": 100
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/product/:id',
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