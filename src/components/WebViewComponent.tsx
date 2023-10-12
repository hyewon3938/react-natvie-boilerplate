import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WebViewComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.webview} source={{uri: 'https://wooah.kr'}} />
    </SafeAreaView>
  );
};

export default WebViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
