const https = require('https')

const params = JSON.stringify({
  "refund_account_details": {
    "currency": "NGN",
    "account_number": "1234567890",
    "bank_id": "9"
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/refund/retry_with_customer_details/{id}',
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