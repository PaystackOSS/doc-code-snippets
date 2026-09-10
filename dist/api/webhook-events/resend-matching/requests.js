const sh = `#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events/resend-matching"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "filters": {
    "status": "Failed",
    "category": "transactions",
    "event_type": "charge.success",
    "from": "2026-07-01",
    "to": "2026-07-09"
  }
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "filters": {
    "status": "Failed",
    "category": "transactions",
    "event_type": "charge.success",
    "from": "2026-07-01",
    "to": "2026-07-09"
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/events/resend-matching',
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
$url = "https://api.paystack.co/integration/webhooks/events/resend-matching";

$fields = [
  "filters" => [
    "status" => "Failed",
    "category" => "transactions",
    "event_type" => "charge.success",
    "from" => "2026-07-01",
    "to" => "2026-07-09"
  ]
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

export {sh, js, php}