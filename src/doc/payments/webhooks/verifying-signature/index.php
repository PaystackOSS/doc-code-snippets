<?php
const PAYSTACK_TOLERANCE_SECONDS = 300;

// Returns the key id (kid) of the signature that matched, or null.
function verifyPaystackSignature(string $rawBody, ?string $header, array $secrets, ?int $now = null): ?string
{
    if ($header === null || $header === '') {
        return null;
    }

    $t = null;
    $entries = [];
    foreach (explode(',', $header) as $part) {
        $pair = explode('=', $part, 2);
        if (count($pair) !== 2) {
            continue;
        }
        [$key, $value] = array_map('trim', $pair);
        if ($key === 't') {
            if ($t !== null || !preg_match('/^[0-9]+$/D', $value)) {
                return null;
            }
            $t = (int) $value;
        } elseif ($key === 'v1') {
            $kidAndHex = explode(':', $value, 2);
            if (count($kidAndHex) === 2) {
                $entries[] = $kidAndHex;
            }
        }
    }
    if ($t === null || count($entries) === 0) {
        return null;
    }
    $now = $now ?? time();
    if (abs($now - $t) > PAYSTACK_TOLERANCE_SECONDS) {
        return null;
    }

    foreach ($secrets as $secret) {
        $expected = hash_hmac('sha512', $t . '.' . $rawBody, $secret);
        foreach ($entries as [$kid, $hex]) {
            if (preg_match('/^[0-9a-f]{128}$/D', $hex) && hash_equals($expected, $hex)) {
                return $kid;
            }
        }
    }
    return null;
}

$rawBody = file_get_contents('php://input'); // the exact bytes Paystack sent
$secret = getenv('PAYSTACK_WEBHOOK_SECRET'); // whsec_...
$header = $_SERVER['HTTP_PAYSTACK_SIGNATURE'] ?? null;

if (!$secret || verifyPaystackSignature($rawBody, $header, [$secret]) === null) {
    http_response_code(401);
    exit;
}

http_response_code(200);
$event = json_decode($rawBody, true);
// Do something - that will not take long - with $event