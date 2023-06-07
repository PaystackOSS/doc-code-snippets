const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_5lgv9bc41uw15pb",
  "description": "Invoice for Damilola",
	"line_items": [
    {"name": "Tripod stand", "amount": "2000000", "quantity": 1},
    {"name": "Lenses", "amount": "300000", "quantity": 1},
    {"name": "White Bulbs", "amount": "50000", "quantity": 5}
  ]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/paymentrequest',
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