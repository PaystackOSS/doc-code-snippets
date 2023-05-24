const sh = `curl https://api.paystack.co/paymentrequest
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "customer": "CUS_5lgv9bc41uw15pb",
      "description": "Invoice for Damilola",
      "line_items": [
        { "name": "Pancakes and sausage", "amount": "2000", "quantity": 1 },
        { "name": "Chicken Salad", "amount": "3000", "quantity": 1 }
      ]
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({ 
  "customer": "CUS_5lgv9bc41uw15pb",
  "description": "Invoice for Damilola",
  "line_items": [
    { "name": "Pancakes and sausage", "amount": "2000", "quantity": 1 },
    { "name": "Chicken Salad", "amount": "3000", "quantity": 1 }
  ]
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
    "customer" => "CUS_5lgv9bc41uw15pb",
    "description" => "Invoice for Damilola",
    "line_items" => [
      ["name" => "Pancakes and sausage", "amount" => "20000", "quantity" => 1],
      ["name" => "Chicken Salad", "amount" => "30000", "quantity" => 1],
    ]
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();

  //set the url, number of POST vars, POST data
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json",
  )
  );

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  $response = curl_exec($ch);
  $json = json_decode($response);
  curl_close($ch);
  var_dump($json);
?>`

const json = `{
  "status": true,
  "message": "Payment request created",
  "data": {
    "id": 6304434,
    "integration": 463433,
    "domain": "live",
    "amount": 5000,
    "currency": "NGN",
    "due_date": "2021-05-18T00:00:00.000Z",
    "has_invoice": true,
    "invoice_number": 4,
    "description": "Invoice for Damilola",
    "line_items": [
      {
        "name": "Pancakes and sausage",
        "amount": "2000",
        "quantity": 1
      },
      {
        "name": "Chicken Salad",
        "amount": "3000",
        "quantity": 1
      }
    ],
    "tax": [],
    "request_code": "PRQ_kwahak3i05nt1ds",
    "status": "pending",
    "paid": false,
    "metadata": null,
    "notifications": [],
    "offline_reference": "4634336304434",
    "customer": 28958104,
    "created_at": "2021-05-17T14:48:53.269Z"
  }
}`

export {sh, js, php, json}