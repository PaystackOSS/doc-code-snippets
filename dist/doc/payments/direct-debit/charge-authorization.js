const sh = `#!/bin/sh
curl https://api.paystack.co/transaction/charge_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "authorization_code" : "AUTH_JV4T9Wawdj", 
      "email": "ravi@demo.com", 
      "amount": "10000",
      "currency": "NGN"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "authorization_code": "AUTH_JV4T9Wawdj",
  "email": "ravi@demo.com",
  "amount": 10000,
  "currency": "NGN"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/charge_authorization',
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
req.end()`

const php = `<?php
  $url = "https://api.paystack.co/transaction/charge_authorization";

  $fields = [
    "authorization_code" => "AUTH_JV4T9Wawdj",
    "email" => "ravi@demo.com",
    "amount" => "10000",
    "currency" => 'NGN',
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
  ));
  
  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>`

const json = `{
	"status": true,
	"message": "Charge attempted",
	"data": {
		"amount": 10000,
		"currency": "NGN",
		"transaction_date": "2023-10-24T12:32:24.000Z",
		"status": "processing",
		"reference": "nl3eljdd6qgbrho",
		"domain": "live",
		"metadata": "",
		"gateway_response": "Transaction in progress",
		"message": null,
		"channel": "direct_debit",
		"ip_address": null,
		"log": null,
		"fees": null,
		"authorization": {
			"authorization_code": "AUTH_JV4T9Wawdj",
			"bin": null,
			"last4": null,
			"exp_month": null,
			"exp_year": null,
			"channel": "direct_debit",
			"card_type": null,
			"bank": "Guaranty Trust Bank",
			"country_code": "NG",
			"brand": null,
			"reusable": true,
			"signature": null,
			"account_name": null
		},
		"customer": {
			"id": 180061682,
			"first_name": "Ravi",
			"last_name": "Demo",
			"email": "ravi@demo.com",
			"customer_code": "CUS_24lze1c8i2zl76y",
			"phone": "",
			"metadata": null,
			"risk_action": "default",
			"international_format_phone": null
		},
		"plan": null,
		"id": 1504238596
	}
}
`

export {sh, js, php, json}