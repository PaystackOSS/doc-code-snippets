const sh = `curl https://api.paystack.co/dedicated_account
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "customer": "CUS_358xertt55", "preferred_bank": "titan-paystack"}'
-X POST`

const js = `var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account',
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

var postData = JSON.stringify({
  "customer":"CUS_358xertt55",
  "preferred_bank":"titan-paystack"
});

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
  CURLOPT_POSTFIELDS => array("customer" => "CUS_358xertt55", "preferred_bank" => "titan-paystack"),
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
	"message": "NUBAN successfully created",
	"data": {
		"bank": {
			"name": "Titan Paystack",
			"id": 1,
			"slug": "titan-paystack"
		},
		"account_name": "KaroKart Rhoda Church",
		"account_number": "9930000737",
		"assigned": true,
		"currency": "NGN",
		"metadata": null,
		"active": true,
		"id": 253,
		"created_at": "2019-12-12T12:39:04.000Z",
		"updated_at": "2020-01-06T15:51:24.000Z",
		"assignment": {
			"integration": 100043,
			"assignee_id": 7454289,
			"assignee_type": "Customer",
			"expired": false,
			"account_type": "PAY-WITH-TRANSFER-RECURRING",
			"assigned_at": "2020-01-06T15:51:24.764Z"
		},
		"customer": {
			"id": 7454289,
			"first_name": "Rhoda",
			"last_name": "Church",
			"email": "rhodachurch@email.com",
			"customer_code": "CUS_kpb3qj71u1m0rw8",
			"phone": "+2349053267565",
			"risk_action": "default"
		}
	}
}`

export {sh, js, php, json}