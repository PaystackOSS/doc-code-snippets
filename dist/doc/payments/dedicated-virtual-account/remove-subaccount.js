const sh = `curl https://api.paystack.co/dedicated_account/split
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "account_number": "0033322211" }'
-X DELETE`

const js = `const https = require('https');

const options = {
  'method': 'DELETE',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/split',
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
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`

const json = `{
  "status": "success",
  "message": "Subaccount unassigned",
  "data": {
    "id": 22173,
    "split_config": null,
    "account_name": "KAROKART/YINKA ADE",
    "account_number": "0033322211",
    "currency": "NGN",
    "assigned": true,
    "active": true,
    "createdAt": "2020-03-11T15:14:00.707Z",
    "updatedAt": "2020-03-11T15:14:00.707Z"
  }
}`

export {sh, js, php, json}