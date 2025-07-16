const https = require('https')

const params = JSON.stringify({
	"account": {
		"number": "0123456789",
		"bank_code": "058"
	},
	"address": {
		"street": "Some Where",
		"city": "Ikeja",
		"state": "Lagos"
	}
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer/{id}/initialize-direct-debit',
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