<?php
  $url = "https://api.paystack.co/storefront/1559046";

  $fields = [
    'name' => "Updated Storefront Name",
    'description' => "An updated description"
  ];

  $fields_string = http_build_query($fields);

  $ch = curl_init();
  
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "PUT");
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
  ));
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  $result = curl_exec($ch);
  echo $result;
?>
