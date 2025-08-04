const sh = `curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "nuban", 
      "name": "John Doe", 
      "account_number": "0001234567", 
      "bank_code": "058", 
      "currency": "NGN"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "type":"nuban",
  "name" : "John Doe",
  "account_number": "0001234567",
  "bank_code": "058",
  "currency": "NGN"
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
    'type' => "nuban",
    'name' => "John Doe",
    'account_number' => "0001234567",
    'bank_code' => "058",
    'currency' => "NGN"
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
    "createdAt": "2020-05-13T13:59:07.741Z",
    "currency": "NGN",
    "domain": "test",
    "id": 6788170,
    "integration": 428626,
    "name": "John Doe",
    "recipient_code": "RCP_t0ya41mp35flk40",
    "type": "nuban",
    "updatedAt": "2020-05-13T13:59:07.741Z",
    "is_deleted": false,
    "details": {
      "authorization_code": null,
      "account_number": "0001234567",
      "account_name": null,
      "bank_code": "058",
      "bank_name": "Guaranty Trust Bank"
    }
  }
}`

export {sh, js, php, json}