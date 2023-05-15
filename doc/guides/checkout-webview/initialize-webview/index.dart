@override
Widget build(BuildContext context) {
  return Scaffold(
    body: WebView(
      initialUrl: 'https://checkout.paystack.com/7zu1ot06d0qn9h6',
      javascriptMode: JavascriptMode.unrestricted,
      userAgent: 'Flutter;Webview',
    ),
  );
}