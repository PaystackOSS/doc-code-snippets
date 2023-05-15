const sh = `curl https://api.paystack.co/bank/match_bvn?account_number=0001234567&bank_code=058&bvn=12345678901
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bank/match_bvn?account_number=0001234567&bank_code=058&bvn=12345678901',
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
    CURLOPT_URL => "https://api.paystack.co/bank/match_bvn?account_number=0001234567&bank_code=058&bvn=12345678901",
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
    "message": "BVN boolean match successful",
    "data": {
        "is_match": true,
        "account_name": "Nairobi Yobo",
        "account_number": "0001234567",
        "bvn": "12345678901"
    },
    "meta": {
        "calls_this_month": 1,
        "free_calls_left": 9
    }
  }`

export {sh, js, php, json}