const sh = `#!/bin/sh
url="https://api.paystack.co/integration/webhooks/endpoints"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "name": "Order fulfillment",
  "url": "https://example.com/webhooks/paystack",
  "events": [
    "charge.success",
    "charge.failed"
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "name": "Order fulfillment",
  "url": "https://example.com/webhooks/paystack",
  "events": [
    "charge.success",
    "charge.failed"
  ]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/endpoints',
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
$url = "https://api.paystack.co/integration/webhooks/endpoints";

$fields = [
  "name" => "Order fulfillment",
  "url" => "https://example.com/webhooks/paystack",
  "events" => ["charge.success", "charge.failed"]
];

$fields_string = json_encode($fields);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer SECRET_KEY",
  "Content-Type: application/json",
  "Cache-Control: no-cache",
));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
echo $result;
?>`

const json = `{
  "status": true,
  "message": "Webhook endpoint created",
  "data": {
    "webhook_url_code": "WHK_1a2b3c4d",
    "name": "Order fulfillment",
    "webhook_url": "https://example.com/webhooks/paystack",
    "enabled": true,
    "events": [
      "charge.success",
      "charge.failed"
    ],
    "event_count": 2
  }
}`

export {sh, js, php, json}