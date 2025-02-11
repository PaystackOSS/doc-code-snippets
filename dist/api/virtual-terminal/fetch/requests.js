const sh = `#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code"
authorization="Authorization: Bearer SECRET_KEY"

curl "$url" \
-H "$authorization" \
-X GET`

const js = `const https = require('https')

const options = {
hostname: 'api.paystack.co',
port: 443,
path: '/virtual_terminal/:code',
method: 'GET',
headers: {
    Authorization: 'Bearer SECRET_KEY'
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

req.end()`

const php = `<?php
$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => "https://api.paystack.co/virtual_terminal/:code",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_CUSTOMREQUEST => "GET",
CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer SECRET_KEY",
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