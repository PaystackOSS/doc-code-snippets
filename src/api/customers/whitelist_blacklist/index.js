const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_xr58yrr2ujlft9k",
  "risk_action": "allow"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer/set_risk_action',
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