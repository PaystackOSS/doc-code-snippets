const sh = `curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "amount": 1000,
      "email": "customer@email.com",
      "currency": "ZAR",
      "qr": {
        "provider" : "scan-to-pay"
      }
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "amount": 1000,
  "email": "customer@email.com",
  "currency": "ZAR",
  "qr": {
    "provider" : "scan-to-pay"
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/charge',
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
  CURLOPT_URL => "https://api.paystack.co/charge", 
  CURLOPT_RETURNTRANSFER => true, 
  CURLOPT_ENCODING => "", 
  CURLOPT_MAXREDIRS => 10, 
  CURLOPT_TIMEOUT => 30, 
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, 
  CURLOPT_CUSTOMREQUEST => "POST", 
  CURLOPT_POSTFIELDS => [
    "amount" => 1000,
    "email" => "customer@email.com",
    "currency" => "ZAR",
    "qr" => [
      "provider" => "scan-to-pay"
    ]
  ], 
  CURLOPT_HTTPHEADER => array( 
    "Authorization: Bearer SECRET_KEY", 
    "Content-Type: application/json" ),
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
  "message": "Charge attempted",
  "data": {
    "reference": "48rx32f1womvcr4",
    "status": "pay_offline",
    "qr_code": "0002010216421527000104176552045499530356654031005802NG5920Babafemi enterprises6005Lagos62230519PSTK_104176000926|16304713a",
    "url": "https://files.paystack.co/qr/visa/104176/Babafemi_enterprises_visaqr_1544025482956.png"
  }
}`

export {sh, js, php, json}