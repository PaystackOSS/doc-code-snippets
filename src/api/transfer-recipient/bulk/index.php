<?php
  $url = "https://api.paystack.co/transferrecipient/bulk";

  $fields = [
    "batch" => [[
      "type" => "nuban",
      "name" => "Habenero Mundane",
      "account_number" => "0123456789",
      "bank_code" => "033",
      "currency" => "NGN"
    ],
    [
      "type" => "nuban",
      "name" => "Soft Merry",
      "account_number" => "98765432310",
      "bank_code" => "50211",
      "currency" => "NGN"
    ]]
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
  ));
  
  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>