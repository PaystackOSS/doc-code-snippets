const sh = `curl https://api.paystack.co/dedicated_account
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "customer": 481193, 
      "preferred_bank":"wema-bank", 
      "subaccount": "SUB_ACCOUNTCODE" 
    }'
-X POST`

const js = `const https = require('https');

let options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account',
  'headers': {
    'authorization': 'Bearer SEECRET_KEY',
    'content-type': 'application/json',
    'user-agent': 'Paystack-Developers-Hub'
  }
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

let postData = JSON.stringify({
  "customer":481193,
  "preferred_bank":"wema-bank",
  "subaccount":"SUB_ACCOUNTCODE"
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
  CURLOPT_POSTFIELDS =>"{\"customer\":481193,\"preferred_bank\":\"wema-bank\", \"subaccount\": \"SUB_ACCOUNTCODE\"}",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SECRET_KEY",
    "content-type: application/json",
    "user-agent: Paystack-Developers-Hub"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`

const json = `{
	"status": true,
	"message": "Assigned Managed Account Successfully Created",
	"data": {
		"bank": {
			"name": "Wema Bank",
			"id": 20,
			"slug": "wema-bank"
		},
		"account_name": "KAROKART/YINKA ADE",
		"account_number": "6731105168",
		"assigned": true,
		"currency": "NGN",
		"metadata": null,
		"active": true,
		"id": 97,
		"created_at": "2019-11-13T13:52:39.000Z",
		"updated_at": "2020-03-17T07:52:23.000Z",
		"assignment": {
			"integration": 100043,
			"assignee_id": 17328,
			"assignee_type": "Customer",
			"expired": false,
			"account_type": "PAY-WITH-TRANSFER-RECURRING",
			"assigned_at": "2020-03-17T07:52:23.023Z",
			"expired_at": null
		},
		"split_config": { "subaccount": "ACC_qwerty" },
		"customer": {
			"id": 17328,
			"first_name": "YINKA",
			"last_name": "ADE",
			"email": "yinka@testemail.com",
			"customer_code": "CUS_xxxxxxxx",
			"phone": null,
			"metadata": null,
			"risk_action": "default"
		}
	}
}`

export {sh, js, php, json}