const sh = `#!/bin/sh
url="https://api.paystack.co/product/:id"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "description": "Product Six Description", "name": "Product Six",
      "price": 500000, "currency": "USD", "limited": false, 
      "quantity": 100 
     }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PUT






`

const js = `const https = require('https')

const params = JSON.stringify({
  "description": "Product Six Description",
  "name": "Product Six",
  "price": 500000,
  "currency": "USD",
  "limited": false,
  "quantity": 100
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/product/:id',
  method: 'PUT',
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
  $url = "https://api.paystack.co/product/:id";

  $fields = [
    'description' => "Product Six Description",
    'name' => "Product Six",
    'price' => 500000,
    'currency' => "USD",
    'limited' => false,
    'quantity' => 100,
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
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