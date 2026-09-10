const https = require('https')

const params = JSON.stringify({
  "filters": {
    "status": "Failed",
    "category": "transactions",
    "event_type": "charge.success",
    "from": "2026-07-01",
    "to": "2026-07-09"
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/events/resend-matching',
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