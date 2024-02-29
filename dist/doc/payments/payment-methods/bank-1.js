const sh = `curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "10000", 
      "bank": {
        "code": "50211", 
        "phone": "+2348100000000",
        "token": "123456"
      }
    }'
-X POST
`

const js = `const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "10000",
  "bank": {
    "code": "50211",
    "phone": "+2348100000000",
    "token": "123456"
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
      "email" => "customer@email.com", 
      "amount" => "10000",
      "bank" => [
        "code" => "50211", 
        "phone" => "+2348100000000",
        "token" => "123456"
      ]
    ],
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

const json = `{
  "status": true,
  "message": "Charge attempted",
  "data": {
    "reference": "z8q981z5kp7sfde",
    "status": "pending",
    "display_text": "Processing transaction"
  }
}
`

export {sh, js, php, json}