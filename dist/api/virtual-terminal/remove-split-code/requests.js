const sh = `#!/bin/sh
url="https://api.paystack.co/virtual_terminal/:code/split_code"
authorization="Authorization: Bearer SECRET_KEY"
content_type="Content-Type: application/json"
data='{
    "split_code": "SPL_98WF13Zu8w5"
}'

curl "$url" -H "$authorization" -H "$content_type" -X DELETE -d "$data"`

const js = `const https = require('https')

const params = JSON.stringify({
"split_code": "SPL_98WF13Zu8w5"
})

const options = {
hostname: 'api.paystack.co',
port: 443,
path: '/virtual_terminal/:code/split_code',
method: 'DELETE',
headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json',
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

$data = array(
"split_code" => "SPL_98WF13Zu8w5"
);

curl_setopt_array($curl, array(
CURLOPT_URL => "https://api.paystack.co/virtual_terminal/:code/split",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_CUSTOMREQUEST => "DELETE",
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