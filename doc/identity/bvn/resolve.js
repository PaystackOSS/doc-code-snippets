const bash = `curl https://api.paystack.co/bank/resolve_bvn/:BVN
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bank/resolve_bvn/:BVN',
  method: 'GET',
  headers: {
    Authorization: 'Bearer SECRET_KEY'
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
    CURLOPT_URL => "https://api.paystack.co/bank/resolve_bvn/:BVN",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
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
  "message": "BVN resolved",
  "data": {
    "first_name": "LARRY",
    "last_name": "JAMES",
    "dob": "30-Jan-60",
    "formatted_dob": "1960-01-30",
    "mobile": "08012345678",
    "bvn": "xxxxxxxxxxx"
  },
  "meta": {
    "calls_this_month": 1,
    "free_calls_left": 9
  }
}`

export { bash, js, php, json }
