<?php
$curl = curl_init();
curl_setopt_array($curl, array( 
  CURLOPT_URL => "https://api.paystack.co/charge", 
  CURLOPT_RETURNTRANSFER => true, 
  CURLOPT_ENCODING => "", 
  CURLOPT_MAXREDIRS => 10, 
  CURLOPT_TIMEOUT => 30, 
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, 
  CURLOPT_CUSTOMREQUEST => "POST", 
  CURLOPT_POSTFIELDS => [
    "amount" => 1000,
    "email" => "customer@email.com",
    "currency" => "ZAR",
    "qr" => [
      "provider" => "scan-to-pay"
    ]
  ], 
  CURLOPT_HTTPHEADER => array( 
    "Authorization: Bearer SECRET_KEY", 
    "Content-Type: application/json" ),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response;
}
?>