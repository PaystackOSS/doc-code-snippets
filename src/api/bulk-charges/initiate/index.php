<?php
  $curl = curl_init();
  $url = "https://api.paystack.co/bulkcharge";

  $fields = '[{
    "authorization": "AUTH_ncx8hews93", 
    "amount": 2500,
    "reference": "dam1266638dhhd"
  }, 
  {
    "authorization": "AUTH_xfuz7dy4b9", 
    "amount": 1500,
    "reference": "dam1266638dhhe"
  }]';

  curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => $fields,
    CURLOPT_HTTPHEADER => array(
      'Authorization: Bearer SECRET_KEY',
      'Content-Type: application/json'
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  echo $response;
?>