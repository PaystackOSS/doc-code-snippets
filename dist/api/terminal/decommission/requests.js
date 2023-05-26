const sh = `#!/bin/sh
url="https://api.paystack.co/terminal/decommission_device"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "serial_number": "1111150412230003899"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "serial_number": "1111150412230003899"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/terminal/decommission_device',
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
  $url = "https://api.paystack.co/terminal/decommission_device";

  $body = '{
    "serial_number": "1111150412230003899"
  }';

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $body);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json",
  ));
  
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  $response = curl_exec($ch);
  $json = json_decode($response);
  curl_close($ch);
  var_dump($json);
?>`

export {sh, js, php}