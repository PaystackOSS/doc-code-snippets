const sh = `curl https://api.paystack.co/dedicated_account/assign
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "email": "janedoe@test.com",
      "first_name": "Jane",
      "middle_name": "Karen",
      "last_name": "Doe",
      "phone": "+2348100000000",
      "preferred_bank": "test-bank",
      "country": "NG",
      "account_number": "0123456789",
      "bvn": "20012345678",
      "bank_code": "007"
}'
-X POST`

const js = `var https = require('https')

var options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/assign',
  'headers': {
    'Authorization': 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  },
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
    "country": "NG",
    "account_number": "0123456789",
    "bvn": "20012345678",
    "bank_code": "007"
});

req.write(postData);

req.end(); `

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
    "country" => "NG",
    "account_number" => "0123456789",
    "bvn" => "20012345678",
    "bank_code" => "007"
  ),
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`

const json = `{
  "status": true,
  "message": "Assign dedicated account in progress"
}`

export {sh, js, php, json}