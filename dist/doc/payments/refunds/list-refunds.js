const sh = `curl https://api.paystack.co/refund 
-H 'authorization: Bearer YOUR_SECRET_KEY'
-H 'cache-control: no-cache'
-H 'content-type: application/json' 
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/refund',
  method: 'GET',
  headers: {
    Authorization: 'Bearer SECRET_KEY'
  }
}

https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})`

const php = `<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/bank/refund",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
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
  "message": "Refunds retrieved",
  "data": [
    {
      "integration": 428626,
      "transaction": 627178582,
      "dispute": null,
      "settlement": null,
      "id": 747680,
      "domain": "test",
      "currency": "NGN",
      "amount": 10000,
      "status": "processed",
      "refunded_at": null,
      "refunded_by": "jen@smith.com",
      "customer_note": "Refund for transaction qufywna9w9a5d8v",
      "merchant_note": "Refund for transaction qufywna9w9a5d8v by jen@smith.com",
      "deducted_amount": 10000,
      "fully_deducted": true,
      "createdAt": "2020-05-19T11:12:17.000Z"
    },
    {
      "integration": 428626,
      "transaction": 640672957,
      "dispute": null,
      "settlement": null,
      "id": 742609,
      "domain": "test",
      "currency": "NGN",
      "amount": 20000,
      "status": "processed",
      "refunded_at": null,
      "refunded_by": "jen@smith.com",
      "customer_note": "blah blah",
      "merchant_note": "yada yada",
      "deducted_amount": 20000,
      "fully_deducted": true,
      "createdAt": "2020-04-30T10:43:47.000Z"
    }
  ],
  "meta": {
    "total": 2,
    "skipped": 0,
    "perPage": 50,
    "page": 1,
    "pageCount": 1
  }
}`

export {sh, js, php, json}