const sh = `curl https://api.paystack.co/transaction/charge_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "authorization_code" : "AUTH_pmx3mgawyd", 
      email: "mail@mail.com", 
      amount: "300000" 
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "authorization_code" : "AUTH_pmx3mgawyd",
  "email" : "mail@mail.com",
  "amount" : 300000
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/charge_authorization',
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
  $url = "https://api.paystack.co/transaction/charge_authorization";

  $fields = [
    'authorization_code' => "AUTH_pmx3mgawyd",
    'email' => "mail@mail.com",
    'amount' => "300000"
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
  "message": "Charge attempted",
  "data": {
    "amount": 35247,
    "currency": "NGN",
    "transaction_date": "2024-08-22T10:53:49.000Z",
    "status": "success",
    "reference": "0m7frfnr47ezyxl",
    "domain": "test",
    "metadata": "",
    "gateway_response": "Approved",
    "message": null,
    "channel": "card",
    "ip_address": null,
    "log": null,
    "fees": 10247,
    "authorization": {
      "authorization_code": "AUTH_pmx3mgawyd",
      "bin": "408408",
      "last4": "4081",
      "exp_month": "12",
      "exp_year": "2030",
      "channel": "card",
      "card_type": "visa ",
      "bank": "TEST BANK",
      "country_code": "NG",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_yEXu7dLBeqG0kU7g95Ke",
      "account_name": null
    },
    "customer": {
      "id": 181873746,
      "first_name": null,
      "last_name": null,
      "email": "demo@test.com",
      "customer_code": "CUS_1rkzaqsv4rrhqo6",
      "phone": null,
      "metadata": {
        "custom_fields": [
          {
            "display_name": "Customer email",
            "variable_name": "customer_email",
            "value": "new@email.com"
          }
        ]
      },
      "risk_action": "default",
      "international_format_phone": null
    },
    "plan": null,
    "id": 4099490251
  }
}`

export {sh, js, php, json}