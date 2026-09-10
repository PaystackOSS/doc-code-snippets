const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/events/665f1c2a9d1e4b0012a3c4d5',
  method: 'GET',
  headers: {
    Authorization: 'Bearer SECRET_KEY'
  }
}

https.request(options, res => {
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