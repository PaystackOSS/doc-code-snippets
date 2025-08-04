const sh = `curl https://api.paystack.co/transfer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
  "source": "balance",
  "amount": 100000,
  "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68",
  "recipient": "RCP_gd9vgag7n5lr5ix",
  "reason": "Bonus for the week"
}'
-X POST
`

const js = `const https = require('https')

const params = JSON.stringify({
  "source": "balance",
  "reason": "Bonus for the week",
  "amount": 100000,
  "recipient": "RCP_gd9vgag7n5lr5ix",
  "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transfer',
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
$url = "https://api.paystack.co/transfer";

$fields = [
  "source" => "balance",
  "reason" => "Bonus for the week",
  "amount" => 100000,
  "recipient" => "RCP_gd9vgag7n5lr5ix",
  "reference" => "acv_9ee55786-2323-4760-98e2-6380c9cb3f68"
];

$fields_string = http_build_query($fields);

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer SECRET_KEY",
  "Cache-Control: no-cache",
));

//So that curl_exec returns the contents of the cURL; rather than echoing it
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//execute post
$result = curl_exec($ch);
echo $result;

?>`

const json = `{
  "status": true,
  "message": "Transfer has been queued",
  "data": {
    "transfersessionid": [],
    "transfertrials": [],
    "domain": "test",
    "amount": 100000,
    "currency": "NGN",
    "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68",
    "source": "balance",
    "source_details": null,
    "reason": "Bonus for the week",
    "status": "success",
    "failures": null,
    "transfer_code": "TRF_v5tip3zx8nna9o78",
    "titan_code": null,
    "transferred_at": null,
    "id": 860703114,
    "integration": 463433,
    "request": 1068439313,
    "recipient": 56824902,
    "createdAt": "2025-08-04T10:32:40.000Z",
    "updatedAt": "2025-08-04T10:32:40.000Z"
  }
}`

export {sh, js, php, json}