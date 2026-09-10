<?php
$url = "https://api.paystack.co/integration/webhooks/events/resend-matching";

$fields = [
  "filters" => [
    "status" => "Failed",
    "category" => "transactions",
    "event_type" => "charge.success",
    "from" => "2026-07-01",
    "to" => "2026-07-09"
  ]
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