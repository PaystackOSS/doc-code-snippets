const dart = `static const _methodChannel =
      MethodChannel('com.example.sample_registration/payment');

Future<void> makePayment() async {
    String reference = '';
    try {
      var options = {
        'amount': 5000,
        'supplementaryData': {
          'developerSuppliedText': null,
          'developerSuppliedImageUrlPath':
              "https://assets.paystack.com/assets/img/press/Terminal-x-Bature-x-World-Cup-Receipt.jpg",
          'barcodeOrQrcodeImageText': null,
          'textImageType': null
        }
      };
      reference = await _methodChannel.invokeMethod('makePayment', options);
      print("Reference: $reference");
    } on PlatformException catch (e) {
      print("Error: $e");
      reference = '';
    }

    setState(() {
      _transactionReference = reference;
    });
  }`

export {dart}