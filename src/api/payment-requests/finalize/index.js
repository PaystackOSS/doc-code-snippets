const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/paymentrequest/finalize/:id_or_code',
  method: 'POST',
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