<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/apple-pay/domain",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "DELETE",
  CURLOPT_POSTFIELDS => array("domainName" => "example.com"),
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SEECRET_KEY",
    "content-type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;