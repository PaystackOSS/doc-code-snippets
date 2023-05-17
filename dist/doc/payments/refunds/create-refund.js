const sh = `curl https://api.paystack.co/refund
-H 'authorization: Bearer YOUR_SECRET_KEY'
-H 'cache-control: no-cache'
-H 'content-type: application/json'
-d '{ "transaction":"qufywna9w9a5d8v", "amount":"10000" }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "transaction": "qufywna9w9a5d8v",
  "amount": "10000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/refund',
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
  $url = "https://api.paystack.co/refund";

  $fields = [
    'transaction' => "qufywna9w9a5d8v",
    'amount' => "10000",
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
  curl_setopt($ch,CURLOPT_RETURNREFUND, true); 
  
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>`

const json = `{
  "status": true,
  "message": "Refund has been queued for processing",
  "data": {
    "transaction": {
      "id": 1004723697,
      "domain": "live",
      "reference": "T685312322670591",
      "amount": 10000,
      "paid_at": "2021-08-20T18:34:11.000Z",
      "channel": "apple_pay",
      "currency": "NGN",
      "authorization": {
        "exp_month": null,
        "exp_year": null,
        "account_name": null
      },
      "customer": {
        "international_format_phone": null
      },
      "plan": {},
      "subaccount": {
        "currency": null
      },
      "split": {},
      "order_id": null,
      "paidAt": "2021-08-20T18:34:11.000Z",
      "pos_transaction_data": null,
      "source": null,
      "fees_breakdown": null
    },
    "integration": 412829,
    "deducted_amount": 0,
    "channel": null,
    "merchant_note": "Refund for transaction T685312322670591 by test@me.com",
    "customer_note": "Refund for transaction T685312322670591",
    "status": "pending",
    "refunded_by": "test@me.com",
    "expected_at": "2021-12-16T09:21:17.016Z",
    "currency": "NGN",
    "domain": "live",
    "amount": 10000,
    "fully_deducted": false,
    "id": 3018284,
    "createdAt": "2021-12-07T09:21:17.122Z",
    "updatedAt": "2021-12-07T09:21:17.122Z"
  }
}`

export {sh, js, php, json}