const sh = `curl https://api.paystack.co/preauthorization/reserve_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "email" : "test@paystack.com",
      "currency": "ZAR",
      "amount": 1000,
      "authorization_code": "AUTH_dalhwqi5vw",
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "email" : "test@paystack.com",
    "currency": "ZAR",
    "amount": 1000,
    "authorization_code": "AUTH_dalhwqi5vw"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/preauthorization/reserve_authorization',
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
  $url = "https://api.paystack.co/preauthorization/reserve_authorization";

  $fields = [
    'email' => 'test@paystack.com',
    'currency' => 'ZAR',
    'amount' => 1000,
    'authorization_code' => 'AUTH_dalhwqi5vw',  
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
    "message": "Preauthorization successful",
    "data": {
        "id": 523,
        "domain": "test",
        "status": "authorized",
        "reference": "pre_p0xpfge2",
        "amount": 1600,
        "gateway_response": {
            "authorizeResponse": "Approved",
            "rrn":"KdeasineK"
        },
        "created_at": "2023-08-24T19:00:18.000Z",
        "released_at": null,
        "expiry_date": "2023-08-25T19:00:26.000Z",
        "currency": "ZAR",
        "metadata": null,
        "fees": 0,
        "authorization": {
            "authorization_code": "AUTH_dalhwqi5vw",
            "bin": "454545",
            "last4": "4545",
            "exp_month": "08",
            "exp_year": "2028",
            "channel": "card",
            "card_type": "visa credit",
            "bank": "NEDBANK",
            "country_code": "ZA",
            "brand": "visa",
            "reusable": true,
            "signature": "SIG_BAJR7TwTw5TwKOYCro5c",
            "account_name": null
        },
        "customer": {
            "id": 180063193,
            "first_name": null,
            "last_name": null,
            "email": "test@paystack.com",
            "customer_code": "CUS_zi5os4fs31qxao0",
            "phone": null,
            "metadata": null,
            "risk_action": "default",
            "international_format_phone": null
        },
        "merchant_id": 210002,
        "merchant_name": "ABC merchant",
        "expire_action": "release",
        "split_code": null,
        "split": null
    }
}`

export {sh, js, php, json}