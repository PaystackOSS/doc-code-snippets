const sh = `curl https://api.paystack.co/transfer/bulk
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{
  "currency": "NGN",
  "source": "balance",
  "transfers": [
    {
      "amount": 20000,
      "reference": "588YtfftReF355894J",
      "reason": "Why not?",
      "recipient": "RCP_2tn9clt23s7qr28"
    },
    {
      "amount": 30000,
      "reference": "YunoTReF35e0r4J",
      "reason": "Because I can",
      "recipient": "RCP_1a25w1h3n0xctjg"
    },
    {
      "amount": 40000,
      "reason": "Coming right up",
      "recipient": "RCP_aps2aibr69caua7"
    }
  ]
}'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "currency": "NGN",
  "source": "balance",
  "transfers": [
    {
      "amount": 20000,
      "reference": "588YtfftReF355894J",
      "reason": "Why not?",
      "recipient": "RCP_2tn9clt23s7qr28"
    },
    {
      "amount": 30000,
      "reference": "YunoTReF35e0r4J",
      "reason": "Because I can",
      "recipient": "RCP_1a25w1h3n0xctjg"
    },
    {
      "amount": 40000,
      "reason": "Coming right up",
      "recipient": "RCP_aps2aibr69caua7"
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
    'transfers' => [{
      "amount" => 20000,
      "reference" => "588YtfftReF355894J",
      "reason" => "Why not?",
      "recipient" => "RCP_2tn9clt23s7qr28"
    },
    {
      "amount" => 30000,
      "reference" => "YunoTReF35e0r4J",
      "reason" => "Because I can",
      "recipient" => "RCP_1a25w1h3n0xctjg"
    },
    {
      "amount" => 40000,
      "reason" => "Coming right up",
      "recipient" => "RCP_aps2aibr69caua7"
    }]
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
      "reference": "588YtfftReF355894J",
      "recipient": "RCP_2tn9clt23s7qr28",
      "amount": 20000,
      "transfer_code": "TRF_ful4rvpbiuaph4fo",
      "currency": "NGN",
      "status": "received"
    },
    {
      "reference": "YunoTReF35e0r4J",
      "recipient": "RCP_1a25w1h3n0xctjg",
      "amount": 30000,
      "transfer_code": "TRF_0lztrf3rox1rpbw1",
      "currency": "NGN",
      "status": "received"
    },
    {
      "reference": "nm7kjk9gb-l5i4lr9wq3",
      "recipient": "RCP_aps2aibr69caua7",
      "amount": 40000,
      "transfer_code": "TRF_hsk59k6loek7vlut",
      "currency": "NGN",
      "status": "received"
    }
  ]
}`

export {sh, js, php, json}