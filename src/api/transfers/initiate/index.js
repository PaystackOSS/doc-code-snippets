const https = require('https')

const params = JSON.stringify({
  "source": "balance", 
  "reason": "Calm down", 
  "amount":3794800, 
  "recipient": "RCP_gx2wn530m0i3w3m"
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