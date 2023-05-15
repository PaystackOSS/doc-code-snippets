<?php
  $url = "https://api.paystack.co/paymentrequest";

  $body = '{ 
    "customer": "CUS_5lgv9bc41uw15pb",
    "description": "Invoice for Damilola",
    "line_items": [
      { "name": "Pancakes and sausage", "amount": "2000", "quantity": 1 },
      { "name": "Chicken Salad", "amount": "3000", "quantity": 1 }
    ]
}';

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $body);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json",
  ));
  
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  $response = curl_exec($ch);
  $json = json_decode($response);
  curl_close($ch);
  var_dump($json);
?>