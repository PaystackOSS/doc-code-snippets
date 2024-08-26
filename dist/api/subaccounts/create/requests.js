const sh = `#!/bin/sh
url="https://api.paystack.co/subaccount"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "business_name": "Oasis", 
  "settlement_bank": "058", 
  "account_number": "0123456047", 
  "percentage_charge": 30 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "business_name": "Oasis",
  "settlement_bank": "058", 
  "account_number": "0123456047", 
  "percentage_charge": 30 
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subaccount',
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
  $url = "https://api.paystack.co/subaccount";

  $fields = [
    'business_name' => "Oasis",
    'settlement_bank' => "058", 
    'account_number' => "0123456047", 
    'percentage_charge' => 30
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