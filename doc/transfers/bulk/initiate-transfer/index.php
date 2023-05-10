<?php
  $url = "https://api.paystack.co/transfer/bulk";

  $fields = [
    'currency' => "NGN",
    'source' => "balance",
    'transfers' => [{
      "amount" => 20000,
      "reference" => "588YtfftReF355894J",
      "reason" => "Why not?",
      "recipient" => "RCP_2tn9clt23s7qr28"
    },
    {
      "amount" => 30000,
      "reference" => "YunoTReF35e0r4J",
      "reason" => "Because I can",
      "recipient" => "RCP_1a25w1h3n0xctjg"
    },
    {
      "amount" => 40000,
      "reason" => "Coming right up",
      "recipient" => "RCP_aps2aibr69caua7"
    }]
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