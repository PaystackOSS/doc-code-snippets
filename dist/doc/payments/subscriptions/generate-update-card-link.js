const sh = `curl https://api.paystack.co/subscription/:code/manage/link
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subscription/:code/manage/link',
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
    CURLOPT_URL => "https://api.paystack.co/subscription/:code/manage/link",
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
	"message": "Link generated",
	"data": {
		"link": "https://paystack.com/manage/subscriptions/qlgwhpyq1ts9nsw?subscription_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJzY3JpcHRpb25fY29kZSI6IlNVQl9xbGd3aHB5cTB0czluc3ciLCJpbnRlZ3JhdGlvbiI6MzUzNTE0LCJkb21haW4iOiJ0ZXN0IiwiZW1haWxfdG9rZW4iOiJzNXIwZjA0ODdwcnNtZWsiLCJpYXQiOjE2MzUyNTkxMzEsIm5iZiI6MTYzNTI1OTEzcjeR82XhwIjoxNjM1MzQ1NTMxfQ.FK1glvwMjHu9J8P-4n2oXPN_u_fIpQZ-F_s5x_4WLag"
	}
}`

export {sh, js, php, json}