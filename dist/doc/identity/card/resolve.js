const sh = `curl https://api.paystack.co/decision/bin/539983
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/decision/bin/539983',
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
})
`

const php = `<?php
  
  $curl = curl_init();
  
  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.paystack.co/decision/bin/539983",
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
?>
`

const json = `{
  "status": true,
  "message": "Bin resolved",
  "data": {
    "bin": "539983",
    "brand": "Mastercard",
    "sub_brand": "",
    "country_code": "NG",
    "country_name": "Nigeria",
    "card_type": "DEBIT",
    "bank": "Guaranty Trust Bank",
    "linked_bank_id": 9
  }
}`

export {sh, js, php, json}