const sh = `curl https://api.paystack.co/bulkcharge
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bulkcharge',
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
   CURLOPT_URL => "https://api.paystack.co/bulkcharge",
   CURLOPT_RETURNTRANSFER => true,
   CURLOPT_ENCODING => "",
   CURLOPT_MAXREDIRS => 10,
   CURLOPT_TIMEOUT => 30,
   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
   CURLOPT_CUSTOMREQUEST => "GET",
   CURLOPT_HTTPHEADER => array(
     "Authorization: Bearer YOUR_SECRET_KEY",
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
	"200": {
		"description": "200 Ok",
		"data": {
			"status": true,
			"message": "Bulk charges retrieved",
			"data": [
				{
					"domain": "test",
					"batch_code": "BCH_1nV4L1D7cayggh",
					"status": "complete",
					"id": 1733,
					"createdAt": "2017-02-04T05:44:19.000Z",
					"updatedAt": "2017-02-04T05:45:02.000Z"
				}
			],
			"meta": {
				"total": 1,
				"skipped": 0,
				"perPage": 50,
				"page": 1,
				"pageCount": 1
			}
		}
	}
}
`

export {sh, js, php, json}