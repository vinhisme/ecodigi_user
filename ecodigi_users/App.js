import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './src/screens/Home';

import './i18n';

export default function App() {

  i18next.init({
    interpolation: { escapeValue: false },  
  });
  
  return (

    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89bc77',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
  },
});
