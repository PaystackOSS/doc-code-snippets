import React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {

  const authorization_url = 'https://checkout.paystack.com/luKuasMan';
  const callback_url = 'https://yourcallback.com';
  const cancel_url = "https://your-cancel-url.com";

  onNavigationStateChange = state => {
 
    const { url } = state;

    if (!url) return;

    if (url === callback_url) {
			// get transaction reference from url and verify transaction, then redirect
      const redirectTo = 'window.location = "' + callback_url + '"';
      this.webview.injectJavaScript(redirectTo);
    }
    if (url === cancel_url) {
      // handle webview removal
      // You can either unmount the component, or
      // Use a navigator to pop off the view
      // Run the cancel payment function if you have one
    }
  };

  return (
    <WebView 
      source={{ uri: authorization_url }}
      style={{ marginTop: 40 }}
      onNavigationStateChange={ this.onNavigationStateChange }
    />
  );
}