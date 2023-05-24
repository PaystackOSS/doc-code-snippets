<?php
  $url = "https://api.paystack.co/paymentrequest";


  $fields = [
    "customer" => "CUS_5lgv9bc41uw15pb",
    "description" => "Invoice for Damilola",
    "line_items" => [
      ["name" => "Pancakes and sausage", "amount" => "20000", "quantity" => 1],
      ["name" => "Chicken Salad", "amount" => "30000", "quantity" => 1],
    ]
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();

  //set the url, number of POST vars, POST data
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json",
  )
  );

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  $response = curl_exec($ch);
  $json = json_decode($response);
  curl_close($ch);
  var_dump($json);
?>