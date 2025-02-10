const sh = `#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code"
authorization="Authorization: Bearer SECRET_KEY"
content_type="Content-Type: application/json"
data='{
    "name": "New terminal name"
}'

curl "$url" -H "$authorization" -H "$content_type" -X PUT -d "$data"`

const js = `const https = require('https')

const params = JSON.stringify({
    "name": "New terminal name"
})

const options = {
hostname: 'api.paystack.co',
port: 443,
path: '/virtual_terminal/:code',
method: 'PUT',
headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(params)
}
}

const req = https.request(options, res => {
let data = ''

res.on('data', (chunk) => {
    data += chunk
})

res.on('end', () => {
    console.log(JSON.parse(data))
})
})

req.on('error', error => {
console.error(error)
})

req.write(params)
req.end()`

const php = `<?php
$curl = curl_init();

$data = array({
    "name": "New terminal name"
});

curl_setopt_array($curl, array(
CURLOPT_URL => "https://api.paystack.co/virtual_terminal/:code",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_CUSTOMREQUEST => "PUT",
CURLOPT_POSTFIELDS => json_encode($data),
CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json",
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

export {sh, js, php}