import React from 'react';
import { WebView } from 'react-native-webview';
export default function Profile({ route }) {
  const github_username = route.params.github_username;

  return (
    <WebView
      source={{ uri: `https://github.com/${github_username}` }}
      style={{ flex: 1 }}
    />
  );
}
