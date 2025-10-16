const sh = `#!/bin/sh
url="https://api.paystack.co/refund/retry_with_customer_details/{id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "refund_account_details": {
    "currency": "NGN",
    "account_number": "1234567890",
    "bank_id": "9"
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "refund_account_details": {
    "currency": "NGN",
    "account_number": "1234567890",
    "bank_id": "9"
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/refund/retry_with_customer_details/{id}',
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
$url = "https://api.paystack.co/refund/retry_with_customer_details/{id}";

$fields = [
  'transaction' => 1641,
  "refund_account_details" => [
    "currency" => "NGN",
    "account_number" => "1234567890",
    "bank_id" => "9"
  ]
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
echo $result;`

const json = `{
  "status": true,
  "message": "Refund retried and has been queued for processing",
  "data": {
    "integration": 123456,
    "transaction": 3298598423,
    "dispute": null,
    "settlement": null,
    "id": 1234567,
    "domain": "live",
    "currency": "NGN",
    "amount": 20000,
    "status": "processing",
    "refunded_at": null,
    "expected_at": "2025-10-13T16:02:18.000Z",
    "channel": "isw_3ds",
    "refunded_by": "paystack@email.com",
    "customer_note": "Refund for transaction T708775813895475",
    "merchant_note": "Refund for transaction T708775813895475 by paystack@email.com",
    "deducted_amount": 20000,
    "fully_deducted": true,
    "bank_reference": null,
    "reason": "PROCESSING",
    "customer": null,
    "initiated_by": "paystack@email.com",
    "reversed_at": null,
    "session_id": null
  }
}`

export {sh, js, php, json}