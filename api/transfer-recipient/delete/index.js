const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transferrecipient/:id_or_code',
  method: 'DELETE',
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