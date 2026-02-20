const sh = `curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "amount": 1000,
      "email": "drew.john@email.com",
      "currency": "ZAR",
      "capitec_pay": {
        "identifier_key" : "CELLPHONE",
        "identifier_value" : "0812345678"
      }
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "email": "drew.john@mail.com",
  "amount": 1000,
  "currency": "ZAR",
  "capitec_pay": {
    "identifier_key": "CELLPHONE",
    "identifier_value": "0812345678"
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
    "email" => "drew.john@email.com",
    "currency" => "ZAR",
    "capitec_pay" => [
      "identifier_key" => "CELLPHONE",
      "identifier_value" => "0812345678"
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
  "type": "success",
  "code": "ok",
  "data": {
    "status": "success",
    "timeToLive": 120,
    "expiryDate": "2026-02-17T11:29:37.000Z",
    "transaction": {
      "id": 5805764100,
      "reference": "nvh8o4pwtivwkx4",
      "domain": "live",
      "amount": 1000,
      "currency": "ZAR",
      "metadata": "",
      "createdAt": "2026-02-17T11:27:36.000Z",
      "customer": {
        "id": 180101459,
        "first_name": "Drew",
        "last_name": "John",
        "email": "drew.john@email.com",
        "customer_code": "CUS_xy1ofyzvnhagniv",
        "phone": "",
        "metadata": null,
        "risk_action": "default",
        "international_format_phone": null
      }
    }
  },
  "message": "Charge pending"
}`

export {sh, js, php, json}