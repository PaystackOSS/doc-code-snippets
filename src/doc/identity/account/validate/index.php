<?php
  $url = "https://api.paystack.co/bank/validate";
  $fields = [
    'bank_code' => "632005",
    'country_code' => 'ZA',
    'account_number' => '0123456789',
    'account_name' => 'Jane Ann',
    'account_type' => 'personal',
    'document_type' => 'identityNumber',
    'document_number' => '1234567890123'
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