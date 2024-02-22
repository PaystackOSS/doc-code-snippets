@override
Widget build(BuildContext context) {
  return Scaffold(
    body: WebView(
      initialUrl: 'https://checkout.paystack.com/7zu1ot06d0qn9h6',
      javascriptMode: JavascriptMode.unrestricted,
      userAgent: 'Flutter;Webview',
      navigationDelegate: (navigation) {
        //Listen for callback URL
        if (navigation.url == "https://hello.pstk.xyz/callback") {
          verifyTransaction(reference);
          Navigator.of(context).pop(); //close webview
        }
        if (navigation.url == "https://your-cancel-url.com") {
          //handle webview removal
          Navigator.of(context).pop(); //close webview
          //Run the cancel payment function if you have one
        }
        return NavigationDecision.navigate;
      },
    ),
  );
}
