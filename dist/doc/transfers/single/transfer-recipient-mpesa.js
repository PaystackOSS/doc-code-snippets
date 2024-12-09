const sh = `#!/bin/sh
curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "mobile_money_business",
      "name": "Till Transfer",
      "bank_code": "MPTILL",
      "account_number": "247247",
      "currency": "KES"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "type": "mobile_money_business",
  "name": "Till Transfer",
  "bank_code": "MPTILL",
  "account_number": "247247",
  "currency": "KES"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transferrecipient',
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
  $url = "https://api.paystack.co/transferrecipient";

  $fields = [
    "type" => "mobile_money_business",
    "name" => "Till Transfer",
    "bank_code" => "MPTILL",
    "account_number" => "247247",
    "currency" => "KES"
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
	"message": "Transfer recipient created successfully",
	"data": {
		"active": true,
        "createdAt": "2024-11-28T09:28:50.000Z",
        "currency": "KES",
        "description": null,
        "domain": "test",
        "email": null,
        "id": 92176030,
        "integration": 845995,
        "metadata": null,
        "name": "Till Transfer Example",
        "recipient_code": "RCP_5vl8b2yma7xdnjp",
        "type": "mobile_money_business",
        "updatedAt": "2024-11-28T09:28:50.000Z",
        "is_deleted": false,
        "isDeleted": false,
        "details": {
            "authorization_code": null,
            "account_number": "247247",
            "account_name": null,
            "bank_code": "MPTILL",
            "bank_name": "M-PESA Till"
        }
	}
}
`

export {sh, js, php, json}