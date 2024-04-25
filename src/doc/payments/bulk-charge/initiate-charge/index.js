const https = require('https')

const params = JSON.stringify([
  {
    "amount": 10000,
    "authorization": "AUTH_ncx8hews93",
    "reference": "my_reference_1"
  },
  {
    "amount": 15000,
    "authorization": "AUTH_200nvt70zo",
    "reference": "my_reference_2"
  },
  {
    "amount": 25000,
    "authorization": "AUTH_84bqxd3rkf",
    "reference": "my_reference_3"
  }
])

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bulkcharge',
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