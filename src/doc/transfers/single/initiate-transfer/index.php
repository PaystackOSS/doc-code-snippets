<?php
$url = "https://api.paystack.co/transfer";

$fields = [
  "source" => "balance",
  "reason" => "Bonus for the week",
  "amount" => 100000,
  "recipient" => "RCP_gd9vgag7n5lr5ix",
  "reference" => "acv_9ee55786-2323-4760-98e2-6380c9cb3f68"
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
  "Cache-Control: no-cache",
));

//So that curl_exec returns the contents of the cURL; rather than echoing it
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//execute post
$result = curl_exec($ch);
echo $result;

?>