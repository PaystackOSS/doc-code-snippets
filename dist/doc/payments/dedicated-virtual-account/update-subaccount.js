const sh = `curl https://api.paystack.co/dedicated_account/split
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "account_number": "0033322211", "subaccount": "SUB_ACCOUNTCODE" }'
-X POST`

const js = `var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/split',
  'headers': {
    'authorization': 'Bearer SECRET_KEY',
    'content-type': 'application/json'
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

var postData = JSON.stringify({
  "account_number":"0033322211",
  "subaccount":"SUB_ACCOUNTCODE"
});

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
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => array("account_number" => "0033322211", "subaccount" => "SUB_ACCOUNTCODE"),
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SECRET_KEY",
    "content-type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`

const json = `{
  "status": true,
  "message": "Subaccount assigned",
  "data": {
    "id": 22495,
    "account_name": "KAROKART/YINKA ADE",
    "account_number": "0033322211",
    "assigned": 1,
    "currency": "NGN",
    "metadata": null,
    "active": 1,
    "last_assignment_id": 525,
    "createdAt": "2020-03-20T11:03:43.000Z",
    "updatedAt": "2020-03-20T11:03:43.000Z",
    "assignment_id": 525,
    "split_config": {
      "subaccount":"ACCT_4r33icuptxl40vv"
    }
  }
}`

export {sh, js, php, json}