const https = require('https')

const params = JSON.stringify({
  "resolution": "merchant-accepted",
  "message": "Merchant accepted",
  "uploaded_filename": "qesp8a4df1xejihd9x5q",
  "refund_amount": 1002
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/dispute/:id/resolve',
  method: 'PUT',
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