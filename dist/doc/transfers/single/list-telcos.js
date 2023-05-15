const sh = `curl https://api.paystack.co/bank?currency=GHS&type=mobile_money
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET
`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bank?currency=GHS&type=mobile_money',
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
    CURLOPT_URL => "https://api.paystack.co/bank?currency=GHS&type=mobile_money",
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
  "message": "Banks retrieved",
  "data": [
    {
      "name": "AirtelTigo",
      "slug": "atl-mobile-money",
      "code": "ATL",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": null,
      "country": "Ghana",
      "currency": "GHS",
      "type": "mobile_money",
      "id": 29,
      "createdAt": "2018-03-29T12:54:59.000Z",
      "updatedAt": "2020-01-24T10:01:06.000Z"
    },
    {
      "name": "MTN",
      "slug": "mtn-mobile-money",
      "code": "MTN",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": null,
      "country": "Ghana",
      "currency": "GHS",
      "type": "mobile_money",
      "id": 28,
      "createdAt": "2018-03-29T12:54:59.000Z",
      "updatedAt": "2019-10-22T11:04:46.000Z"
    },
    {
      "name": "Vodafone",
      "slug": "vod-mobile-money",
      "code": "VOD",
      "longcode": "",
      "gateway": null,
      "pay_with_bank": false,
      "active": true,
      "is_deleted": null,
      "country": "Ghana",
      "currency": "GHS",
      "type": "mobile_money",
      "id": 66,
      "createdAt": "2018-03-29T12:54:59.000Z",
      "updatedAt": "2019-10-22T11:05:08.000Z"
    }
  ]
}`

export {sh, js, php, json}