const sh = `#!/bin/sh
curl https://api.paystack.co/customer/authorization/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
	    "email": "ravi@demo.com",
      "channels": ["direct_debit"],
	    "callback_url": "http://test.url.com"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "email" : "mail@mail.com",
  "channels": ["direct_debit"],
  "callback_url": "http://test.url.com"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer/authorization/initialize',
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
  $url = "https://api.paystack.co/customer/authorization/initialize";

  $fields = [
    'email' => "mail@mail.com",
    'channels' => ["direct-debit"],
    'callback_url' => "http://test.url.com"
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
	"message": "Authorization initialized",
	"data": {
		"redirect_url": "https://checkout.paystack.com/82t4mp5b5mfn51h",
		"access_code": "82t4mp5b5mfn51h",
		"reference": "dfbzfotsrbv4n5s82t4mp5b5mfn51h"
	}
}`

export {sh, js, php, json}