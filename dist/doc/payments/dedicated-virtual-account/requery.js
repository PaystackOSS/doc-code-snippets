const sh = `curl https://api.paystack.co/dedicated_account/requery?account_number={accountNumber}&provider_slug={provider_slug}&date={yyyy-mm-dd}
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-X GET`

const js = `var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/requery?account_number={accountNumber}&provider_slug={provider_slug}&date={yyyy-mm-dd}',
  'headers': {
    'Authorization': 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
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

req.end();`

const php = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/dedicated_account/requery?account_number={accountNumber}&provider_slug={provider_slug}&date={yyyy-mm-dd}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
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
  "message": "We are checking the status of your transfer. We will send you a notification once it is confirmed"
}`

export {sh, js, php, json}