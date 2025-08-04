const sh = `#!/bin/sh
url="https://api.paystack.co/transfer/bulk"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{
  "currency": "NGN",
  "source": "balance",
  "transfers": [
    {
      "amount": 20000,
      "reference": "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
      "reason": "Bonus for the week",
      "recipient": "RCP_gd9vgag7n5lr5ix"
    },
    {
      "amount": 35000,
      "reference": "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
      "reason": "Bonus for the week",
      "recipient": "RCP_zpk2tgagu6lgb4g"
    },
    {
      "amount": 15000,
      "reference": "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
      "reason": "Bonus for the week",
      "recipient": "RCP_dfznnod8rwxlwgn"
    }
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "currency": "NGN",
  "source": "balance",
  "transfers": [
    {
      "amount": 20000,
      "reference": "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
      "reason": "Bonus for the week",
      "recipient": "RCP_gd9vgag7n5lr5ix"
    },
    {
      "amount": 35000,
      "reference": "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
      "reason": "Bonus for the week",
      "recipient": "RCP_zpk2tgagu6lgb4g"
    },
    {
      "amount": 15000,
      "reference": "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
      "reason": "Bonus for the week",
      "recipient": "RCP_dfznnod8rwxlwgn"
    }
  ]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transfer/bulk',
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
  $url = "https://api.paystack.co/transfer/bulk";

  $fields = [
    'currency' => "NGN",
    'source' => "balance",
    'transfers' => [
      [
        "amount" => 20000,
        "reference" => "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
        "reason" => "Bonus for the week",
        "recipient" => "RCP_gd9vgag7n5lr5ix"
      ],
      [
        "amount" => 35000,
        "reference" => "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
        "reason" => "Bonus for the week",
        "recipient" => "RCP_zpk2tgagu6lgb4g"
      ],
      [
        "amount" => 15000,
        "reference" => "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
        "reason" => "Bonus for the week",
        "recipient" => "RCP_dfznnod8rwxlwgn"
      ]
    ]
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
  ));
  
  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>`

const json = `{
  "status": true,
  "message": "3 transfers queued.",
  "data": [
    {
      "reference": "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
      "recipient": "RCP_gd9vgag7n5lr5ix",
      "amount": 20000,
      "transfer_code": "TRF_o0mv5dc2lv4t2wdb",
      "currency": "NGN",
      "status": "success"
    },
    {
      "reference": "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
      "recipient": "RCP_zpk2tgagu6lgb4g",
      "amount": 35000,
      "transfer_code": "TRF_tlvxomz43gjso2py",
      "currency": "NGN",
      "status": "success"
    },
    {
      "reference": "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
      "recipient": "RCP_dfznnod8rwxlwgn",
      "amount": 15000,
      "transfer_code": "TRF_yt2y2gcd3dmli8av",
      "currency": "NGN",
      "status": "success"
    }
  ]
}`

export {sh, js, php, json}