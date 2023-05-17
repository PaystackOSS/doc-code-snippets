import React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {

  const authorization_url = 'https://checkout.paystack.com/luKuasMan';

  return (
    <WebView 
      source={{ uri: authorization_url }}
      style={{ marginTop: 40 }}
    />
  );
}