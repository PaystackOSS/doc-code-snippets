<?php
$curl = curl_init();

$data = array(
"name" => "Sample Terminal",
"destinations" => array(
    array(
    "target" => "+27639022319",
    "name" => "Phone Destination"
    )
)
);

curl_setopt_array($curl, array(
CURLOPT_URL => "https://api.paystack.co/virtual_terminal",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_CUSTOMREQUEST => "POST",
CURLOPT_POSTFIELDS => json_encode($data),
CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json",
    "Cache-Control: no-cache"
),
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
