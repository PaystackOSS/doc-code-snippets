const sh = `curl https://api.paystack.co/plan
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "name": "Monthly Retainer", 
      "interval": "monthly", 
      "amount": 500000
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "name": "Monthly Retainer",
  "interval": "monthly",
  "amount": 500000
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/plan',
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
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/plan",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => array(
    "name" => "Monthly Retainer",
    "interval" => "monthly",
    "amount" => 500000
  ),
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache"
  ),
)
);

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
  "message": "Plan created",
  "data": {
    "name": "Monthly Retainer",
    "interval": "monthly",
    "amount": 500000,
    "integration": 428626,
    "domain": "test",
    "currency": "NGN",
    "plan_code": "PLN_u4cqud8vabi89hx",
    "invoice_limit": 0,
    "send_invoices": true,
    "send_sms": true,
    "hosted_page": false,
    "migrate": false,
    "id": 49122,
    "createdAt": "2020-05-22T12:36:12.333Z",
    "updatedAt": "2020-05-22T12:36:12.333Z"
  }
}`

export {sh, js, php, json}