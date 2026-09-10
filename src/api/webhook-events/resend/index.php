<?php
$url = "https://api.paystack.co/integration/webhooks/events/resend";

$fields = [
  "ids" => ["665f1c2a9d1e4b0012a3c4d5", "665a0b119d1e4b0012a3bd90"]
];

$fields_string = json_encode($fields);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer SECRET_KEY",
  "Content-Type: application/json",
  "Cache-Control: no-cache",
));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
echo $result;
?>