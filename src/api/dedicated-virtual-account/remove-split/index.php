<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/dedicated_account/split",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "DELETE",
  CURLOPT_POSTFIELDS => array("account_number" => "0033322211"),
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SEECRET_KEY",
    "content-type: application/json",
    "Cookie: __cfduid=df6355b0f005797cd79527d1a6da37c131598191689"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>