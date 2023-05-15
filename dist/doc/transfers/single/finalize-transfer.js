const sh = `curl https://api.paystack.co/transfer/finalize_transfer
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "transfer_code": "TRF_vsyqdmlzble3uii", "otp": "928783" }'
-X POST
`

const js = `const https = require('https')

const params = JSON.stringify({
  "transfer_code": "TRF_vsyqdmlzble3uii", 
  "otp": "928783"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transfer/finalize_transfer',
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
  $url = "https://api.paystack.co/transfer/finalize_transfer";

  $fields = [
    "transfer_code" => "TRF_vsyqdmlzble3uii", 
    "otp" => "928783"
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
    "reference": "on5hyz9poe",
    "integration": 428626,
    "domain": "test",
    "amount": 3794800,
    "currency": "NGN",
    "source": "balance",
    "reason": "Holiday Flexing",
    "recipient": 6788170,
    "status": "success",
    "transfer_code": "TRF_vsyqdmlzble3uii",
    "id": 23070321,
    "createdAt": "2020-05-13T14:22:49.687Z",
    "updatedAt": "2020-05-13T14:22:49.687Z"
  }
}`

export {sh, js, php, json}