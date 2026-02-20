const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/capitec-pay/requery/{ref}',
  method: 'GET',
  headers: {
    Authorization: 'Bearer pk_domain_xxxxx'
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