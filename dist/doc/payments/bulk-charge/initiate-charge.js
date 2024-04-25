const sh = `#!/bin/sh
url="https://api.paystack.co/bulkcharge"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='[
  {
    "amount": 10000,
    "authorization": "AUTH_ncx8hews93",
    "reference": "my_reference_1"
  },
  {
    "amount": 15000,
    "authorization": "AUTH_200nvt70zo",
    "reference": "my_reference_2"
  },
  {
    "amount": 25000,
    "authorization": "AUTH_84bqxd3rkf",
    "reference": "my_reference_3"
  }
]'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify([
  {
    "amount": 10000,
    "authorization": "AUTH_ncx8hews93",
    "reference": "my_reference_1"
  },
  {
    "amount": 15000,
    "authorization": "AUTH_200nvt70zo",
    "reference": "my_reference_2"
  },
  {
    "amount": 25000,
    "authorization": "AUTH_84bqxd3rkf",
    "reference": "my_reference_3"
  }
])

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bulkcharge',
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
  $url = "https://api.paystack.co/bulkcharge";

  $fields = '[
    {
      "amount": 10000,
      "authorization": "AUTH_ncx8hews93",
      "reference": "my_reference_1"
    },
    {
      "amount": 15000,
      "authorization": "AUTH_200nvt70zo",
      "reference": "my_reference_2"
    },
    {
      "amount": 25000,
      "authorization": "AUTH_84bqxd3rkf",
      "reference": "my_reference_3"
    }
  ]';

  curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => $fields,
    CURLOPT_HTTPHEADER => array(
      'Authorization: Bearer SECRET_KEY',
      'Content-Type: application/json'
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
?>`

const json = `{
	"status": true,
	"message": "Charges have been queued",
	"data": {
		"batch_code": "BCH_ml3zk2hregr1inj",
		"reference": "bulkcharge-1713528671888-29smeabva5",
		"id": 191016934,
		"integration": 463433,
		"domain": "test",
		"status": "active",
		"total_charges": 3,
		"pending_charges": 3,
		"createdAt": "2024-04-19T12:11:11.000Z",
		"updatedAt": "2024-04-19T12:11:11.000Z"
	}
}`

export {sh, js, php, json}