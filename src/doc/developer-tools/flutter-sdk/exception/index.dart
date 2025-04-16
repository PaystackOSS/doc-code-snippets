try {
  final response = await _paystack.launch(_accessCode);
  // rest of code
} on PlatformException catch (e) {
  log(e.code!);
  log(e.message!);
}