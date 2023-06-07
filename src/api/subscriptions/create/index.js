const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_xnxdt6s1zg1f4nx",
  "plan": "PLN_gx2wn530m0i3w3m"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subscription',
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