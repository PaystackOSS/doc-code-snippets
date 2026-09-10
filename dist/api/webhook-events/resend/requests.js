const sh = `#!/bin/sh
url="https://api.paystack.co/integration/webhooks/events/resend"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "ids": ["665f1c2a9d1e4b0012a3c4d5", "665a0b119d1e4b0012a3bd90"]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "ids": ["665f1c2a9d1e4b0012a3c4d5", "665a0b119d1e4b0012a3bd90"]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/events/resend',
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
$url = "https://api.paystack.co/integration/webhooks/events/resend";

$fields = [
  "ids" => ["665f1c2a9d1e4b0012a3c4d5", "665a0b119d1e4b0012a3bd90"]
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