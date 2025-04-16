String reference = "";

try {
  final response = await _paystack.launch(_accessCode);
  if (response.status == "success") {
    reference = response.reference;
    log(reference);
  } else if(response.status == "cancelled") {
    log(response.message);
  } else {
    log(response.message);
  }
} on PlatformException catch (e) {
  log(e.message!);
}