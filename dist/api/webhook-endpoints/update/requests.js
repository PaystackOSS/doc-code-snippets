const sh = `#!/bin/sh
url="https://api.paystack.co/integration/webhooks/endpoints/WHK_1a2b3c4d"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "enabled": false
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X PATCH`

const js = `const https = require('https')

const params = JSON.stringify({
  "enabled": false
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/integration/webhooks/endpoints/WHK_1a2b3c4d',
  method: 'PATCH',
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
$url = "https://api.paystack.co/integration/webhooks/endpoints/WHK_1a2b3c4d";

$fields = [
  "enabled" => false
];

$fields_string = json_encode($fields);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PATCH");
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