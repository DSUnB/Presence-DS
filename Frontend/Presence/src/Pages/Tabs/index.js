import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Creditos from '../Creditos'
import Tecnologias from '../Tecnologias';
import Aplicativo from '../Aplicativo';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
      initialRouteName="Creditos"
    >
      <Tab.Screen
        name="Aplicativo"
        component={Aplicativo}
      />
      <Tab.Screen
        name="Desenvolvedores"
        component={Creditos}
      />
      <Tab.Screen
        name="Tecnologias"
        component={Tecnologias}
      />
    </Tab.Navigator>
  )
}
