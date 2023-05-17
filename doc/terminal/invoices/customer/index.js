const https = require('https')

const params = JSON.stringify({
  "email": "zero@sum.com",
  "first_name": "Zero",
  "last_name": "Sum",
  "phone": "+2348123456789"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer',
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