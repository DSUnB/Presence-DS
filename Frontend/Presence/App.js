import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Login from './src/Pages/Login';
import Form from './src/Pages/Form';
import AppLoading from 'expo-app-loading';
import MainAlun from './src/Pages/MainAlun';
import MainProf from './src/Pages/MainProf';


const Stack = createNativeStackNavigator();

export default function App() {

  const [dummy,setDummy] = useState(false);

  Font.loadAsync({
    'poppinsb':require('./src/assets/fonts/Poppins-Bold.ttf'),
    'poppinsr':require('./src/assets/fonts/Poppins-Regular.ttf'),
    'poppinsm':require('./src/assets/fonts/Poppins-Medium.ttf'),


  }).then(() => {
    setDummy(true);
  })

  if(!dummy){
    return (
      <AppLoading />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="MainProf" component={MainProf} />
        <Stack.Screen name="MainAlun" component={MainAlun} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}