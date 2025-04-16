String publicKey = "pk_domain_xxxxxx";

try {
  final response = await _paystack.initialize(publicKey, true); // allow logging
  if (response) {
    log("Sucessfully initialised the SDK");
  } else {
     log("Unable to initialise the SDK");
  }
} on PlatformException catch (e) {
   log(e.message!);
}