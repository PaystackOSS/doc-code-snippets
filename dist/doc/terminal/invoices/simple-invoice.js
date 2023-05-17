const sh = `curl https://api.paystack.co/paymentrequest
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "customer": "CUS_gv2e6wdd0os1rd4",
      "amount": 40000,
      "description": "2-for-1 promo"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_gv2e6wdd0os1rd4",
  "amount": 40000,
  "description": "2-for-1 promo"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/paymentrequest',
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
  $url = "https://api.paystack.co/paymentrequest";

  $fields = [
    "customer" => "CUS_gv2e6wdd0os1rd4",
    "amount" => "40000",
    "description" => "2-for-1 promo"
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
  "message": "Payment request created",
  "data": {
    "id": 8344724,
    "integration": 463433,
    "domain": "test",
    "amount": 40000,
    "currency": "NGN",
    "due_date": null,
    "has_invoice": false,
    "invoice_number": null,
    "description": "2-for-1 promo",
    "line_items": [],
    "tax": [],
    "request_code": "PRQ_xkid8oip8r2gt2y",
    "status": "pending",
    "paid": false,
    "metadata": null,
    "notifications": [],
    "offline_reference": "4634338344724",
    "customer": 60604714,
    "created_at": "2021-11-09T10:47:22.467Z",
    "discount": null,
    "split_code": null
  }
}`

export {sh, js, php, json}