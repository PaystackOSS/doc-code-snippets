const https = require('https')

const params = JSON.stringify({
  "description": "a test invoice",
	"line_items": [
		{"name": "item 1", "amount": 20000},
		{"name": "item 2", "amount": 20000}
	],
	"tax": [
		{"name": "VAT", "amount": 2000}
	],
	"customer": "CUS_xwaj0txjryg393b",
	"due_date": "2020-07-08"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/paymentrequest',
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