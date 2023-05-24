const sh = `curl https://api.paystack.co/customer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "zero@sum.com"
      "first_name": "Zero",
      "last_name": "Sum",
      "phone": "+2348123456789"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "email": "zero@sum.com",
  "first_name": "Zero",
  "last_name": "Sum",
  "phone": "+2348123456789"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/customer',
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
  $url = "https://api.paystack.co/customer";

  $fields = [
    "email" => "zero@sum.com",
    "first_name" => "Zero",
    "last_name" => "Sum",
    "phone" => "+2348123456789"
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
  "message": "Customer created",
  "data": {
    "transactions": [],
    "subscriptions": [],
    "authorizations": [],
    "email": "zero@sum.com",
    "first_name": "Zero",
    "last_name": "Sum",
    "phone": "+2348123456789",
    "integration": 100032,
    "domain": "test",
    "customer_code": "CUS_xnxdt6s1zg1f4nx",
    "risk_action": "default",
    "id": 1173,
    "identified": false,
    "identifications":null,
    "createdAt": "2021-03-29T20:03:09.584Z",
    "updatedAt": "2021-03-29T20:03:09.584Z"
  }
}`

export {sh, js, php, json}