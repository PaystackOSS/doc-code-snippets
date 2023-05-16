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
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => array("account_number" => "0033322211", "split_code" => "SPL_e7jnRLtzla"),
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer SECRET_KEY",
    "content-type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;