<?php
  $url = "https://api.paystack.co/charge";

  $fields = [
    'email' => "customer@email.com",
    'amount' => "10000",
    "metadata" => [
      "custom_fields" => [
        [
          "value" => "makurdi",
          "display_name" => "Donation for",
          "variable_name" => "donation_for"
        ]
      ]
    ],
    "bank" => [
      "code" => "057",
      "account_number" => "0000000000"
    ],
    "birthday" => "1995-12-23"
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