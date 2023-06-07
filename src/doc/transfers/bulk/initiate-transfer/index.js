const https = require('https')

const params = JSON.stringify({
  "currency": "NGN",
  "source": "balance",
  "transfers": [
    {
      "amount": 20000,
      "reference": "588YtfftReF355894J",
      "reason": "Why not?",
      "recipient": "RCP_2tn9clt23s7qr28"
    },
    {
      "amount": 30000,
      "reference": "YunoTReF35e0r4J",
      "reason": "Because I can",
      "recipient": "RCP_1a25w1h3n0xctjg"
    },
    {
      "amount": 40000,
      "reason": "Coming right up",
      "recipient": "RCP_aps2aibr69caua7"
    }
  ]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transfer/bulk',
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