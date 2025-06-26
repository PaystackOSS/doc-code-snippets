const sh = `#!/bin/sh
url="https://api.paystack.co/customer/{id}/initialize-direct-debit"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "account": {
		"number": "0123456789",
		"bank_code": "058"
	},
	"address": {
		"street": "Some Where",
		"city": "Ikeja",
		"state": "Lagos"
	}
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

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
req.end()`

const php = `<?php
  $url = "https://api.paystack.co/customer/{id}/initialize-direct-debit";

  $fields = [
    'account' => [
      'number' => '0123456789',
      'bank_code' => '058'
    ],
    'address' => [
      'street' => 'Some Where',
      'city' => 'Ikeja',
      'state' => 'Lagos'
    ]
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

export {sh, js, php}