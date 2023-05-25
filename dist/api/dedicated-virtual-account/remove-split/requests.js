const sh = `#!/bin/sh
url="https://api.paystack.co/dedicated_account/split"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
 "account_number": "0033322211" 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X DELETE

`

const js = `const https = require('follow-redirects').https;
const fs = require('fs');

const options = {
  'method': 'DELETE',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/split',
  'headers': {
    'authorization': 'Bearer SEECRET_KEY',
    'content-type': 'application/json'
  },
  'maxRedirects': 20
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

const postData = JSON.stringify({"account_number":"0033322211"});

req.setHeader('Content-Length', postData.length);

req.write(postData);

req.end();`

const php = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/dedicated_account/split",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "DELETE",
  CURLOPT_POSTFIELDS => array("account_number" => "0033322211"),
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SEECRET_KEY",
    "content-type: application/json",
    "Cookie: __cfduid=df6355b0f005797cd79527d1a6da37c131598191689"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>`

export {sh, js, php}