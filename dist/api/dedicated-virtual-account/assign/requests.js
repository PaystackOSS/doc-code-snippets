const sh = `#!/bin/sh
url="https://api.paystack.co/dedicated_account"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
      "email": "janedoe@test.com",
      "first_name": "Jane",
      "middle_name": "Karen",
      "last_name": "Doe",
      "phone": "+2348100000000",
      "preferred_bank": "test-bank",
      "country": "NG"
    }'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/assign',
  'headers': {
    'Authorization': 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
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

var postData = JSON.stringify({
    "email": "janedoe@test.com",
    "first_name": "Jane",
    "middle_name": "Karen",
    "last_name": "Doe",
    "phone": "+2348100000000",
    "preferred_bank": "test-bank",
    "country": "NG"
});

req.write(postData);

req.end();`

const php = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/dedicated_account/assign",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => array(
    "email" => "janedoe@test.com",
    "first_name" => "Jane",
    "middle_name" => "Karen",
    "last_name" => "Doe",
    "phone" => "+2348100000000",
    "preferred_bank" => "test-bank",
    "country" => "NG"
  ),
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>`

export {sh, js, php}