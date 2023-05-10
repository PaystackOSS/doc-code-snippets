const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bank/match_bvn?account_number=0001234567&bank_code=058&bvn=12345678901',
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