const sh = `curl https://api.paystack.co/subscription/:code/manage/email
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X POST`

const js = `const https = require('https')


const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subscription/:code/manage/email',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
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

req.end()`

const php = `<?php
  $url = "https://api.paystack.co/subscription/:code/manage/email";


  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
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
	"message": "Email successfully sent"
}`

export {sh, js, php, json}