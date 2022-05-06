import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';

import AuthNavigator from './navigation/AuthNavigator';
import HomeNavigator from './navigation/HomeNavigator';




export default function App() {

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
