const bash = `curl https://api.paystack.co/subaccount
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "business_name": "Cheese Sticks", 
      "bank_code": "058", 
      "account_number": "0123456789", 
      "percentage_charge": 0.2 
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "business_name": "Cheese Sticks",
  "bank_code": "058",
  "account_number": "0123456789",
  "percentage_charge": 0.2
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
    'business_name' => "Cheese Sticks",
    'bank_code' => "058",
    'account_number' => "0137472047",
    'percentage_charge' => 0.2
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
  "message": "Subaccount created",
  "data": {
    "business_name": "Cheese Sticks",
    "account_number": "0123456789",
    "percentage_charge": 0.2,
    "settlement_bank": "Guaranty Trust Bank",
    "integration": 428626,
    "domain": "test",
    "subaccount_code": "ACCT_xxxxxxxxxxxxx",
    "is_verified": false,
    "settlement_schedule": "AUTO",
    "active": true,
    "migrate": false,
    "id": 37614,
    "createdAt": "2020-05-19T11:54:20.655Z",
    "updatedAt": "2020-05-19T11:54:20.655Z"
  }
}`

export { bash, js, php, json }
