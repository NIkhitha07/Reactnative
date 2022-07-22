
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Homescreen from './Homescreen';
import FirstScreen from './FirstScreen';
import { store } from './store'
import { Provider } from 'react-redux'
const Stack = createNativeStackNavigator();

const App = () => {
console.log((new Date()).toLocaleDateString());



  return (
    <Provider store={store}>
    <NavigationContainer>
    <FirstScreen/>
  </NavigationContainer>
  </Provider>

  );
};

const styles = StyleSheet.create({

});

export default App;
