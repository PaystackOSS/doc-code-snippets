const dart = `final _publicKey = "pk_domain_xxxx";
final _accessCode = "access_code";
final _paystack = Paystack();

initialize(String publicKey) async {
  try {
    final response = await _paystack.initialize(publicKey);
    if (response) {
      log("Sucessfully initialised the SDK");
    } else {
      log("Unable to initialise the SDK");
    }
  } on PlatformException catch (e) {
    log(e.message!);
  }
}`

export {dart}