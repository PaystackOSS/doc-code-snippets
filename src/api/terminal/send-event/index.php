<?php
  $url = "https://api.paystack.co/terminal/:terminal_id/event";

  $body = '{
    "type": "invoice",
    "action": "process",
    "data": { 
      "id": 7895939, 
      "reference": 4634337895939
    }
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