@override
Widget build(BuildContext context) {
  return Scaffold(
    body: WebView(
    initialUrl: 'https://checkout.paystack.com/7zu1ot06d0qn9h6',
    javascriptMode: JavascriptMode.unrestricted,
    userAgent: 'Flutter;Webview',
    navigationDelegate: (navigation){
      if(navigation.url == 'https://standard.paystack.co/close'){
        Navigator.of(context).pop(); //close webview
      }
      if(navigation.url == "https://hello.pstk.xyz/callback"){
         Navigator.of(context).pop(); //close webview 
      }
      return NavigationDecision.navigate;
    },
  ),
  );
}