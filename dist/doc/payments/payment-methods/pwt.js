const sh = `#!/bin/sh

url="https://api.paystack.co/charge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "email": "another@one.com", 
  "amount": "25000", 
  "bank_transfer": {
    "account_expires_at": "2023-09-12T13:10:00Z"
  } 
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({ 
  "email": "another@one.com", 
  "amount": "25000",
  "bank_transfer": {
    "account_expires_at": "2023-09-12T13:10:00Z"
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/charge',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()`

const php = `<?php
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.paystack.co/charge",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => [
      "email" => "another@one.com", 
      "amount" => "10000",
      "bank_transfer" => [
        "account_expires_at" => "2023-09-12T13:10:00Z"
      ]
    ],
    CURLOPT_HTTPHEADER => array(
      "Authorization: Bearer SECRET_KEY",
      "Cache-Control: no-cache"
    ),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    echo $response;
  }
?>`

const json = `{
	"status": true,
	"message": "Charge attempted",
	"data": {
		"status": "pending_bank_transfer",
		"display_text": "Please make a transfer to the account specified",
		"reference": "4tn28gwznc",
		"amount": 20000,
		"account_name": "PAYSTACK CHECKOUT",
		"account_number": "1231084927",
		"bank": {
			"slug": "test-bank",
			"name": "Test Bank",
			"id": 24
		},
		"account_expires_at": "2023-09-12T13:10:55.000Z"
	}
}
`

export {sh, js, php, json}