const https = require('https')

const params = JSON.stringify({
  "name": "My Storefront",
  "slug": "my-storefront",
  "description": "A description of my storefront"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/storefront',
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
