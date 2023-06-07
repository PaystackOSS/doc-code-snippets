<?php
  $url = "https://api.paystack.co/paymentrequest";

  $fields = [
    "customer" => "CUS_5lgv9bc41uw15pb",
    "description" => "Invoice for Damilola",
    "line_items" => [
      ["name" => "Tripod stand", "amount" => "2000000", "quantity" => 1],
      ["name" => "Lenses", "amount" => "300000", "quantity" => 1],
      ["name" => "White Bulbs", "amount" => "50000", "quantity" => 5]
    ]
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