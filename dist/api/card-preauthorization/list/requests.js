const sh = `#!/bin/sh
url="https://api.paystack.co/preauthorization"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/preauthorization',
  method: 'GET',
  headers: {
    Authorization: 'Bearer SECRET_KEY'
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
req.end()`

export {sh, js}