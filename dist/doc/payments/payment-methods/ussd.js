const sh = `curl https://api.paystack.co/charge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "some@body.nice", 
      "amount":"10000",
      "ussd": {
        "type": "737"
      },
      "metadata": {
        "custom_fields":[{
          "value": "makurdi",
          "display_name": "Donation for",
          "variable_name": "donation_for"
        }]
      }
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "email": "some@body.nice", 
  "amount":"10000",
  "ussd": {
    "type": "737"
  },
  "metadata": {
    "custom_fields":[{
      "value": "makurdi",
      "display_name": "Donation for",
      "variable_name": 
      "donation_for"
    }]
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
      "email" => "some@body.nice", 
      "amount" =>"10000",
      "ussd" => [
        "type" => "737"
      ]
    ],
    CURLOPT_HTTPHEADER => array( 
      "Authorization: Bearer SECRET_KEY", 
      "Content-Type: application/json"
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
    "reference": "yjr1r8rwhedara4",
    "status": "pay_offline",
    "display_text": "Please dial *737*33*4*18791# on your mobile phone to complete the transaction",
    "ussd_code": "*737*33*4*18791#"
  }
}`

export {sh, js, php, json}