const https = require('https')

const params = JSON.stringify({ 
  "customer": "CUS_5lgv9bc41uw15pb",
  "description": "Invoice for Damilola",
  "line_items": [
    { "name": "Pancakes and sausage", "amount": "2000", "quantity": 1 },
    { "name": "Chicken Salad", "amount": "3000", "quantity": 1 }
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