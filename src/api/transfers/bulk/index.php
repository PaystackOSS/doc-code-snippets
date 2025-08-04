<?php
  $url = "https://api.paystack.co/transfer/bulk";

  $fields = [
    'currency' => "NGN",
    'source' => "balance",
    'transfers' => [[
      "amount" => 20000,
      "reference" => "acv_2627bbfe-1a2a-4a1a-8d0e-9d2ee6c31496",
      "reason" => "Bonus for the week",
      "recipient" => "RCP_gd9vgag7n5lr5ix"
    ],
    [
      "amount" => 35000,
      "reference" => "acv_1bd0c1f8-78c2-463b-8bd4-ed9eeb36be50",
      "reason" => "Bonus for the week",
      "recipient" => "RCP_zpk2tgagu6lgb4g"
    ],
    [
      "amount" => 15000,
      "reference" => "acv_11bebfc3-18b3-40aa-a4df-c55068c93457",
      "reason" => "Bonus for the week",
      "recipient" => "RCP_dfznnod8rwxlwgn"
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