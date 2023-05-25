const sh = `#!/bin/sh
url="https://api.paystack.co/dedicated_account"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ "customer": 481193, 
        "preferred_bank":"wema-bank", 
        "split_code": "SPL_e7jnRLtzla" 
      }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('follow-redirects').https;
const fs = require('fs');

let options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account',
  'headers': {
    'authorization': 'Bearer SEECRET_KEY',
    'content-type': 'application/json',
    'user-agent': 'Paystack-Developers-Hub'
  },
  'maxRedirects': 20
};

let req = https.request(options, function (res) {
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

let postData = JSON.stringify({"customer":481193,"preferred_bank":"wema-bank", "split_code": "SPL_e7jnRLtzla"});

req.write(postData);

req.end();`

const php = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/dedicated_account",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => array(
    "customer" => 481193,
    "preferred_bank" => "wema-bank",
    "split_code" => "SPL_e7jnRLtzla"
  ),
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SECRET_KEY",
    "content-type: application/json",
    "user-agent: Paystack-Developers-Hub"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>`

export {sh, js, php}