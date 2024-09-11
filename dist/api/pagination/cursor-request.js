const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: `/transaction?use_cursor=true&perPage=50`,
  method: 'GET',
  headers: {
    Authorization: 'Bearer YOUR_SECRET_KEY'
  }
}

https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})`

const php = `<?php
  $curl = curl_init();
  
  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.paystack.co/transaction?use_cursor=true&perPage=50",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "Authorization: Bearer YOUR_SECRET_KEY",
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

const sh = `#!/bin/sh
url="https://api.paystack.co/transaction?use_cursor=true&perPage=50"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET`

export {js, php, sh}