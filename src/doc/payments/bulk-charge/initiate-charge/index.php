<?php
  $curl = curl_init();
  $url = "https://api.paystack.co/bulkcharge";

  $fields = '[
    {
      "amount": 10000,
      "authorization": "AUTH_ncx8hews93",
      "reference": "my_reference_1"
    },
    {
      "amount": 15000,
      "authorization": "AUTH_200nvt70zo",
      "reference": "my_reference_2"
    },
    {
      "amount": 25000,
      "authorization": "AUTH_84bqxd3rkf",
      "reference": "my_reference_3"
    }
  ]';

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