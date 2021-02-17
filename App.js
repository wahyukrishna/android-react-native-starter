/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform, StyleSheet , Text, View, StatusBar } from 'react-native';
import Header from "./Header";
import Footer from "./Footer";


class App extends React.Component {
  render(){
  return (
    <View>
      <StatusBar backgroundColor="blue"/>
      <Header usia="Usia : 25"/>
      <Text>Testing App</Text>
      <Footer tahun="2019"/>
    </View>
  );
  }
};

export default App;
