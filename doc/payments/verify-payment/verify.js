const bash = `curl https://api.paystack.co/transaction/verify/:reference
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/verify/:reference',
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
    CURLOPT_URL => "https://api.paystack.co/transaction/verify/:reference",
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
  "message": "Verification successful",
  "data": {
    "id": 690075529,
    "domain": "test",
    "status": "success",
    "reference": "nms6uvr1pl",
    "amount": 20000,
    "message": null,
    "gateway_response": "Successful",
    "paid_at": "2020-05-19T12:30:56.000Z",
    "created_at": "2020-05-19T12:26:44.000Z",
    "channel": "card",
    "currency": "NGN",
    "ip_address": "154.118.28.239",
    "metadata": "",
    "log": {
      "start_time": 1589891451,
      "time_spent": 6,
      "attempts": 1,
      "errors": 0,
      "success": true,
      "mobile": false,
      "input": [],
      "history": [
        {
          "type": "action",
          "message": "Attempted to pay with card",
          "time": 5
        },
        {
          "type": "success",
          "message": "Successfully paid with card",
          "time": 6
        }
      ]
    },
    "fees": 300,
    "fees_split": {
      "paystack": 300,
      "integration": 40,
      "subaccount": 19660,
      "params": {
        "bearer": "account",
        "transaction_charge": "",
        "percentage_charge": "0.2"
      }
    },
    "authorization": {
      "authorization_code": "AUTH_xxxxxxxxxx",
      "bin": "408408",
      "last4": "4081",
      "exp_month": "12",
      "exp_year": "2020",
      "channel": "card",
      "card_type": "visa DEBIT",
      "bank": "Test Bank",
      "country_code": "NG",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_xxxxxxxxxxxxxxx",
      "account_name": null
    },
    "customer": {
      "id": 24259516,
      "first_name": null,
      "last_name": null,
      "email": "customer@email.com",
      "customer_code": "CUS_xxxxxxxxxxx",
      "phone": null,
      "metadata": null,
      "risk_action": "default"
    },
    "plan": null,
    "order_id": null,
    "paidAt": "2020-05-19T12:30:56.000Z",
    "createdAt": "2020-05-19T12:26:44.000Z",
    "requested_amount": 20000,
    "transaction_date": "2020-05-19T12:26:44.000Z",
    "plan_object": {},
    "subaccount": {
      "id": 37614,
      "subaccount_code": "ACCT_xxxxxxxxxx",
      "business_name": "Cheese Sticks",
      "description": "Cheese Sticks",
      "primary_contact_name": null,
      "primary_contact_email": null,
      "primary_contact_phone": null,
      "metadata": null,
      "percentage_charge": 0.2,
      "settlement_bank": "Guaranty Trust Bank",
      "account_number": "0123456789"
    }
  }
}`

export { bash, js, php, json }
