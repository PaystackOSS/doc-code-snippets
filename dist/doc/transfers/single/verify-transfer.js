const sh = `#!/bin/sh
url="https://api.paystack.co/transfer/verify/{reference}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transfer/verify/{reference}',
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
    CURLOPT_URL => "https://api.paystack.co/transfer/verify/{reference}",
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
  "message": "Transfer retrieved",
  "data": {
    "amount": 100000,
    "createdAt": "2025-08-04T09:59:19.000Z",
    "currency": "NGN",
    "domain": "test",
    "failures": null,
    "id": 860670817,
    "integration": 463433,
    "reason": "Bonus for the week",
    "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f67",
    "source": "balance",
    "source_details": null,
    "status": "success",
    "titan_code": null,
    "transfer_code": "TRF_8opchtrhtjlfz90n",
    "request": 1068403325,
    "transferred_at": null,
    "updatedAt": "2025-08-04T09:59:19.000Z",
    "recipient": {
      "active": true,
      "createdAt": "2023-07-11T15:42:27.000Z",
      "currency": "NGN",
      "description": "",
      "domain": "test",
      "email": null,
      "id": 56824902,
      "integration": 463433,
      "metadata": null,
      "name": "Jekanmo Padie",
      "recipient_code": "RCP_gd9vgag7n5lr5ix",
      "type": "nuban",
      "updatedAt": "2023-07-11T15:42:27.000Z",
      "is_deleted": false,
      "isDeleted": false,
      "details": {
        "authorization_code": null,
        "account_number": "9876543210",
        "account_name": null,
        "bank_code": "044",
        "bank_name": "Access Bank"
      }
    },
    "session": {
      "provider": null,
      "id": null
    },
    "fee_charged": 1000,
    "fees_breakdown": null,
    "gateway_response": null
  }
}`

export {sh, js, php, json}