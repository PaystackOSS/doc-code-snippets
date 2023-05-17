const sh = `curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "mobile_money", 
      "name": "Abina Nana", 
      "account_number": "0551234987", 
      "bank_code": "MTN", 
      "currency": "GHS"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "type":"mobile_money",
  "name" : "Abina Nana",
  "account_number": "0551234987",
  "bank_code": "MTN",
  "currency": "GHS"
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
    'type' => "mobile_money",
    'name' => "Abina Nana",
    'account_number' => "0551234987",
    'bank_code' => "MTN",
    'currency' => "GHS"
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
    "createdAt": "2022-02-21T12:57:02.156Z",
    "currency": "GHS",
    "domain": "test",
    "id": 25753454,
    "integration": 519035,
    "name": "Abina Nana",
    "recipient_code": "RCP_u2tnoyjjvh95pzm",
    "type": "mobile_money",
    "updatedAt": "2022-02-21T12:57:02.156Z",
    "is_deleted": false,
    "isDeleted": false,
    "details": {
      "authorization_code": null,
      "account_number": "0551234987",
      "account_name": null,
      "bank_code": "MTN",
      "bank_name": "MTN"
    }
  }
}`

export {sh, js, php, json}