const https = require('https')

const params = JSON.stringify({
  "name":"Percentage Split", 
  "type":"percentage",
  "currency": "NGN", 
	"subaccounts":[{
    "subaccount": "ACCT_z3x6z3nbo14xsil",
    "share": 20
  },
  {
      "subaccount": "ACCT_pwwualwty4nhq9d",
      "share": 30
  }], 
	"bearer_type":"subaccount", 
	"bearer_subaccount":"ACCT_hdl8abxl8drhrl3"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/split',
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