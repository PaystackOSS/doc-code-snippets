<?php
  $url = "https://api.paystack.co/split";

  $fields = [
    'name' => "Percentage Split", 
    'type' => "percentage",
    'currency' => "NGN", 
    'subaccounts' => [[
      "subaccount" => "ACCT_z3x6z3nbo14xsil",
      "share" => 20
    ],
    [
        "subaccount" => "ACCT_pwwualwty4nhq9d",
        "share" => 30 
    ]], 
    'bearer_type' => "subaccount", 
    'bearer_subaccount' => "ACCT_hdl8abxl8drhrl3"
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