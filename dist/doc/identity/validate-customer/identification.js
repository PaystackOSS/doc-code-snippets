const sh = `curl https://api.paystack.co/customer/{customer_code}/identification
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
	"country": "NG",
	"type": "bank_account",
	"account_number": "0123456789",
	"bvn": "200123456677",
	"bank_code": "007",
	"first_name": "Asta",
	"last_name": "Lavista"
}'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({ 
	"country": "NG",
	"type": "bank_account",
	"account_number": "0123456789",
	"bvn": "200123456677",
	"bank_code": "007",
	"first_name": "Asta",
	"last_name": "Lavista"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer/{customer_code}/identification',
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
  $url = "https://api.paystack.co/customer/{customer_code}/identification";

  $fields = [
    "country" => "NG",
    "type" => "bank_account",
    "account_number" => "0123456789",
    "bvn" => "200123456677",
    "bank_code" => "007",
    "first_name" => "Asta",
    "last_name" => "Lavista"
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
  "message": "Customer Identification in progress"
}`

export {sh, js, php, json}