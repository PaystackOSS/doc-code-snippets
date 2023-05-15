const https = require('https')

const params = JSON.stringify({
  "source": "balance",
  "amount": 37800,
  "reference": "your-unique-reference",
  "recipient": "RCP_t0ya41mp35flk40",
  "reason": "Holiday Flexing"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transfer',
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