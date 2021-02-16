/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Platform, StyleSheet , Text, View, StatusBar } from 'react-native';

import Header from "./Header";
class App extends Component {
  render(){
  return (
    <View>
      <StatusBar backgroundColor="#000000"/>
      <Header />
      <Text>Testing App</Text>
    </View>
  );
  }
};

export default App;
