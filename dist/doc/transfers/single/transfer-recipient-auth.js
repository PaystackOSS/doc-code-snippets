const sh = `curl https://api.paystack.co/transferrecipient
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "type": "authorization", 
      "name": "Revs Ore", 
      "email": "revs@ore.com", 
      "authorization_code": "AUTH_ncx8hews93"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "type":"authorization",
  "name" : "Revs Ore",
  "email": "revs@ore.com",
  "authorization_code": "AUTH_ncx8hews93"
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
    'type' => "authorization",
    'name' => "Revs Ore",
    'email' => "revs@ore.com",
    'authorization_code' => "AUTH_ncx8hews93"
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
    "createdAt": "2022-02-21T11:35:59.302Z",
    "currency": "NGN",
    "domain": "test",
    "email": "revs@ore.com",
    "id": 25747878,
    "integration": 463433,
    "name": "Revs Ore",
    "recipient_code": "RCP_wql6bj95bll7m6h",
    "type": "authorization",
    "updatedAt": "2022-02-21T11:35:59.302Z",
    "is_deleted": false,
    "isDeleted": false,
    "details": {
      "authorization_code": "AUTH_ncx8hews93",
      "account_number": null,
      "account_name": null,
      "bank_code": "057",
      "bank_name": "Zenith Bank"
    }
  }
}`

export {sh, js, php, json}