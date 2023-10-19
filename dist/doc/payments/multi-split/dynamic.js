const sh = `curl https://api.paystack.co/transaction/initialize
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "email": "customer@email.com", 
      "amount": "20000", 
      "split": {
        "type": "flat",
        "bearer_type": "account",
        "subaccounts": [
          {
            "subaccount": "ACCT_pwwualwty4nhq9d",
            "share": 6000
          },
          {
            "subaccount": "ACCT_hdl8abxl8drhrl3",
            "share": 4000
          },
        ]
      } 
}'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000",
  "split": {
    "type": "flat",
    "bearer_type": "account",
    "subaccounts": [
      {
        "subaccount": "ACCT_pwwualwty4nhq9d",
        "share": 6000
      },
      {
        "subaccount": "ACCT_hdl8abxl8drhrl3",
        "share": 4000
      },
    ]
  } 
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
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

    $fields = [
    'email' => "customer@email.com", 
    'amount' => "20000",
    'currency' => "NGN",
    'split' => [
      'type' => 'flat',
      'bearer_type' => "account",
      'subaccounts' => [[
        'subaccount' => 'ACCT_pwwualwty4nhq9d',
        'share' => 6000
      ],
      [
        'subaccount' => 'ACCT_hdl8abxl8drhrl3',
        'share' => 4000
      ]] 
    ]
  ];

  $fields_string = http_build_query($fields);

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.paystack.co/transaction/initialize",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $fields_string,
    CURLOPT_HTTPHEADER => array(
      "Authorization: Bearer SECRET_KEY",
      "Cache-Control: no-cache",
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
  "message": "Authorization URL created",
  "data": {
    "authorization_url": "https://checkout.paystack.com/nkdks46nymizns7",
    "access_code": "nkdks46nymizns7",
    "reference": "nms6uvr1pl"
  }
}`

export {sh, js, php, json}