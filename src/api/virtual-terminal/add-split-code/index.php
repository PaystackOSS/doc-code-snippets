<?php
$curl = curl_init();

$data = array(
"split_code" => "SPL_98WF13Zu8w5"
);

curl_setopt_array($curl, array(
CURLOPT_URL => "https://api.paystack.co/virtual_terminal/:code/split",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_CUSTOMREQUEST => "PUT",
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