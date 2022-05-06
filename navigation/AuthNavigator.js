import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';

const stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Splash" component={SplashScreen} />
      <stack.Screen name="Login" component={LoginScreen} />
    </stack.Navigator>

  );
}

export default AuthNavigator;