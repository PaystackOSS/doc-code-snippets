const https = require('https')

const params = JSON.stringify({
  "customer_email": "cus@gmail.com",
  "customer_name": "Mensah King",
  "customer_phone": "0802345167",
  "service_details": "claim for buying product",
  "delivery_address": "3a ladoke street ogbomoso"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/dispute/:id/evidence',
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