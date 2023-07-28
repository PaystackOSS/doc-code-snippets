<?php

  function validateTransferRequest($request)
  {
    // validation logic goes here
    return false; // update line based on logic
  }
  
  // Retrieve the request's body and parse it as JSON
  $input = @file_get_contents("php://input");
  $payload = json_decode($input);
  $isValidTransferRequest = validateTransferRequest($payload);
  // Do something with $event

  if(! $isValidTransferRequest) {
    return http_response_code(400);
  }

  return http_response_code(200);
?>