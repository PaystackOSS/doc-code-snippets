const sh = `curl https://api.paystack.co/preauthorization/capture
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "reference": "123-abc",
    "currency": "ZAR",
    "amount": "1000"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "reference": "123-abc",
  "currency": "ZAR",
  "amount": "1000",
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/preauthorization/capture',
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
  $url = "https://api.paystack.co/preauthorization/capture";

  $fields = [
    'reference' => '123-abc'
    'currency' => 'ZAR'
    'amount' => '10000'
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
    "message": "Capture attempted",
    "data": {
        "amount": 1000,
        "currency": "ZAR",
        "transaction_date": "2023-08-24T11:38:32.000Z",
        "status": "success",
        "reference": "123-abc",
        "domain": "test",
        "metadata": {
            "custom_fields": [
              {
                "display_name": "Cart Number",
                "variable_name": "cart_number",
                "value": "123443"
              }
            ]
        },
        "gateway_response": "Approved",
        "message": null,
        "channel": "preauth",
        "ip_address": null,
        "log": null,
        "fees": 373,
        "authorization": {
            "authorization_code": "AUTH_5h7ifp9x1h",
            "bin": "541541",
            "last4": "0051",
            "exp_month": "12",
            "exp_year": "2028",
            "channel": "card",
            "card_type": "mastercard",
            "bank": "Absa Bank Limited, South Africa ",
            "country_code": "ZA",
            "brand": "mastercard",
            "reusable": true,
            "signature": "SIG_6bCAS8p20rANfmuYgQ4a",
            "account_name": null
        },
        "customer": {
            "id": 180063193,
            "first_name": null,
            "last_name": null,
            "email": "customer@email.com",
            "customer_code": "CUS_zi5os4fs31qxao0",
            "phone": null,
            "metadata": null,
            "risk_action": "default",
            "international_format_phone": null
        },
        "plan": null,
        "id": 1504173002
    }
}`

export {sh, js, php, json}