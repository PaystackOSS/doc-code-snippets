const bash = `curl https://api.paystack.co/identity/bvn/resolve/:BVN
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`;

const js = `const https = require('https');

const options = {
  'method': 'GET',
  'hostname': 'api.paystack.co',
  'path': '/identity/bvn/resolve/:BVN',
  'headers': {
    'Authorization': 'Bearer YOUR_SECRET_KEY'
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
})`;

const php = `<?php

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.paystack.co/identity/bvn/resolve/:BVN',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
      'Authorization: Bearer YOUR_SECRET_KEY',
      'Cache-Control: no-cache'
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
    "message": "BVN resolved",
    "data": {
        "title": "Mr",
        "first_name": "JOHN",
        "middle_name": "MUKITE",
        "last_name": "NAMEME",
        "name_on_card": "MUKITE NAMEME",
        "marital_status": "Married",
        "dob": "17-Jun-80",
        "formatted_dob": "1980-06-17", // YYYY-MM-DD
        "mobile": "08091111111",
        "mobile2": "08090000000",
        "registration_date": "24-Dec-16",
        "formatted_registration_date": "2016-12-24",
        "bvn": "00000000000",
        "gender": "Male",
        "lga_of_origin": "Ilesa West",
        "state_of_origin": "Osun State",
        "residential_address": "126 Joel Ogunnaike St Ikeja GRA, Lagos",
        "lga_of_residence": "Ikeja",
        "nationality": "Nigeria",
        "email": "MUKITE@EXAMPLE.COM",
        "is_blacklisted": false,
        "enrollment_bank": {
            "name": "First Bank of Nigeria",
            "code": "011",
            "enrollment_branch": "IKEJA BRANCH"
        },
        "level_of_account": "Level 2 - Medium Level Accounts",
        "nin": "",
        "base_64_image": "Base_64_Encoded_Image=="
    },
    "meta": {
        "calls_this_month": 12,
        "free_calls_left": 0
    }
}`

export { bash, js, php, json }