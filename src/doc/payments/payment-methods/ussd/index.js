const https = require('https')

const params = JSON.stringify({
  "email": "some@body.nice", 
  "amount":"10000",
  "ussd": {
    "type": "737"
  },
  "metadata": {
    "custom_fields":[{
      "value": "makurdi",
      "display_name": "Donation for",
      "variable_name": 
      "donation_for"
    }]
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/charge',
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