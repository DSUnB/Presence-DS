import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Login from './src/Pages/Login';
import Form from './src/Pages/Form';
import AppLoading from 'expo-app-loading';
import MainProf from './src/Pages/MainProf';
import CriarChamada from './src/Pages/CriarChamada';
import Chamada from './src/Pages/Chamada';
import Turma from './src/Pages/Turma';
import MainAlun from './src/Pages/MainAlun';
import ValidarChamada from './src/Pages/ValidarChamada';
import Provider from './src/context/Provider';
import Tabs from './src/Pages/Tabs';
import Creditos from './src/Pages/Creditos';
import Tecnologias from './src/Pages/Tecnologias';
import Aplicativo from './src/Pages/Aplicativo';

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
  <Provider>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Tabs" 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="MainProf" component={MainProf} />
        <Stack.Screen name="CriarChamada" component={CriarChamada} />
        <Stack.Screen name="Chamada" component={Chamada} />
        <Stack.Screen name="Turma" component={Turma} />
        <Stack.Screen name="MainAlun" component={MainAlun} />
        <Stack.Screen name="ValidarChamada" component={ValidarChamada} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Creditos" component={Creditos} />
        <Stack.Screen name="Tecnologias" component={Tecnologias} />
        <Stack.Screen name="Aplicativo" component={Aplicativo} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}