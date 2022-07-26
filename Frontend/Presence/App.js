import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Login from './src/Pages/Login';
import Form from './src/Pages/Form';
import Main from './src/Pages/Main';
import AppLoading from 'expo-app-loading';


const Stack = createNativeStackNavigator();

export default function App() {

  const [dummy,setDummy] = useState(false);

  Font.loadAsync({
    'poppinsb':require('./src/assets/fonts/Poppins-Bold.ttf'),
    'poppinsr':require('./src/assets/fonts/Poppins-Regular.ttf')


  }).then(() => {
    setDummy(true);
  })

  if(!dummy){
    return <AppLoading></AppLoading>

  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}