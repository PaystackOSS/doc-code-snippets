const sh = `const bash = curl https://api.paystack.co/bulkcharge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{
    [
      {"authorization": "AUTH_ncx8hews93", "amount": 2500, "reference": "dam1266638dhhd"}, 
      {"authorization": "AUTH_xfuz7dy4b9", "amount": 1500, "reference": "dam1266638dhhe"}
    ]
  }'

`

const js = `const https = require('https');

const params = JSON.stringify([
  {
    "authorization": "AUTH_ncx8hews93",
    "amount": 2500,
    "reference": "dam1266638dhhd"
  },
  {
    "authorization": "AUTH_xfuz7dy4b9",
    "amount": 1500,
    "reference": "dam1266638dhhe"
  }
]);

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bulkcharge',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, res => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', error => {
  console.error(error);
});

req.write(params);
req.end();
`

const php = `<?php
  $curl = curl_init();
  $url = "https://api.paystack.co/bulkcharge";

  $fields = '[{
    "authorization": "AUTH_ncx8hews93", 
    "amount": 2500,
    "reference": "dam1266638dhhd"
  }, 
  {
    "authorization": "AUTH_xfuz7dy4b9", 
    "amount": 1500,
    "reference": "dam1266638dhhe"
  }]';

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
	"200": {
		"description": "200 Ok",
		"data": {
			"status": true,
			"message": "Charges have been queued",
			"data": {
				"batch_code": "BCH_rrsbgwb4ivgzst1",
				"reference": "bulkcharge-1663150565684-p18nyoa68a",
				"id": 66608171,
				"integration": 463433,
				"domain": "test",
				"status": "active",
				"total_charges": 2,
				"pending_charges": 2,
				"createdAt": "2022-09-14T10:16:05.000Z",
				"updatedAt": "2022-09-14T10:16:05.000Z"
			}
		}
	}
}`

export {sh, js, php, json}