import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';

// String matchers match by prefix; RegExp matchers use `.test(url)`.
// Prefix, not `includes` - otherwise `https://evil.com/?u=https://joinzap.com/app/`
// would match.
const DEEP_LINK_HOSTS = [
  'https://joinzap.com/app/',
  // add your own partner hosts here
];

const shouldHandleExternally = (url, hosts = DEEP_LINK_HOSTS) =>
  !!url &&
  hosts.some((matcher) =>
    typeof matcher === 'string' ? url.indexOf(matcher) === 0 : matcher.test(url),
  );

const openExternalUrl = async (url) => {
  try {
    if (!(await Linking.canOpenURL(url))) return;
    await Linking.openURL(url);
  } catch {
    // Nothing actionable - leaving the WebView is best-effort.
  }
};

export default function App() {

  const authorization_url = 'https://checkout.paystack.com/luKuasMan';
  const callback_url = 'https://yourcallback.com';
  const cancel_url = "https://your-cancel-url.com";

  onShouldStartLoadWithRequest = request => {

    const url = request.url;

    if (!url) return true;

    if (shouldHandleExternally(url)) {
      void openExternalUrl(url);
      return false; // cancel the in-WebView load
    }

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

    return true;
  };

  return (
    <WebView
      source={{ uri: authorization_url }}
      style={{ marginTop: 40 }}
      onShouldStartLoadWithRequest={ this.onShouldStartLoadWithRequest }
    />
  );
}