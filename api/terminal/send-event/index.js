const https = require('https')

const params = JSON.stringify({
  "type": "invoice",
  "action": "process",
  "data": { 
    "id": 7895939, 
    "reference": 4634337895939
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/terminal/:terminal_id/event',
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