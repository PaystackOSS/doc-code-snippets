const https = require('https')

const params = JSON.stringify({
  "description": "Update test invoice", 
  "due_date": "2017-05-10"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/paymentrequest/:id_or_code',
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