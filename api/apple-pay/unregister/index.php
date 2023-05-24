<?php

  $url = "https://api.paystack.co/apple-pay/domain";

  $fields = [
    "domainName" => "example.com"
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_TIMEOUT, 0);
  curl_setopt($ch,CURLOPT_MAXREDIRS, 10);
  curl_setopt($ch,CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
  curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "DELETE");
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "authorization: Bearer SECRET_KEY",
    "content-type: application/json",
    "Cookie: __cfduid=df6355b0f005797cd79527d1a6da37c131598191689"
  ));
   
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>