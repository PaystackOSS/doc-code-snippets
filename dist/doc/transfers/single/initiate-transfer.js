const sh = `curl https://api.paystack.co/transfer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "source": "balance", 
      "amount": "37800",
      "reference": "your-unique-reference", 
      "recipient": "RCP_t0ya41mp35flk40", 
      "reason": "Holiday Flexing" 
    }'
-X POST
`

const js = `const https = require('https')

const params = JSON.stringify({
  "source": "balance",
  "amount": 37800,
  "reference": "your-unique-reference",
  "recipient": "RCP_t0ya41mp35flk40",
  "reason": "Holiday Flexing"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transfer',
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
  $url = "https://api.paystack.co/transfer";

  $fields = [
    'source' => "balance",
    'amount' => 37800,
    "reference" => "your-unique-reference",
    'recipient' => "RCP_t0ya41mp35flk40",
    'reason' => "Holiday Flexing"
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
?>
`

const json = `{
  "status": true,
  "message": "Transfer has been queued",
  "data": {
    "reference": "your-unique-reference",
    "integration": 428626,
    "domain": "test",
    "amount": 37800,
    "currency": "NGN",
    "source": "balance",
    "reason": "Holiday Flexing",
    "recipient": 6788170,
    "status": "success",
    "transfer_code": "TRF_fiyxvgkh71e717b",
    "id": 23070321,
    "createdAt": "2020-05-13T14:22:49.687Z",
    "updatedAt": "2020-05-13T14:22:49.687Z"
  }
}`

export {sh, js, php, json}