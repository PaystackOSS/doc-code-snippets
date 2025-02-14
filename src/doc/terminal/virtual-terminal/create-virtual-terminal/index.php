<?php
  $url = "https://api.paystack.co/virtual_terminal";

  $fields = [
    "name" => "Sales Point #1", 
    "destinations" => [
      ["target" => "+2347081234567"]
    ]
  ];

  $fields_string = json_encode($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer YOUR_SECRET_KEY",
    "Content-Type: application/json",
  ));
  
  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>
