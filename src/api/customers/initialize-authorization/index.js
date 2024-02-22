const https = require('https')

const params = JSON.stringify({
  "email": "mail@mail.com",
  "channel": "direct_debit",
  "callback_url": "http://test.url.com"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer/authorization/initialize',
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