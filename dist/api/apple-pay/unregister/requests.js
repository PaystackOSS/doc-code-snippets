const sh = `#!/bin/sh
url="https://api.paystack.co/apple-pay/domain"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "domainName": "example.com"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X DELETE`

const js = `const https = require('https')

const params = JSON.stringify({
  "domainName": "example.com"
})

const options = {
  'method': 'DELETE',
  'hostname': 'api.paystack.co',
  'path': '/apple-pay/domain',
  'headers': {
    'authorization': 'Bearer SEECRET_KEY',
    'content-type': 'application/json'
  }
};

const req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.setHeader('Content-Length', params.length);
req.write(params);
req.end();`

const php = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/apple-pay/domain",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "DELETE",
  CURLOPT_POSTFIELDS => array("domainName" => "example.com"),
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SEECRET_KEY",
    "content-type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`

export {sh, js, php}