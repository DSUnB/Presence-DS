import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Creditos from '../Creditos'
import Tecnologias from '../Tecnologias';
import Aplicativo from '../Aplicativo';
import VerdePantano from '../VerdePantano';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarShowLabel": false
      }}
      initialRouteName="VerdePantano"
    >
      <Tab.Screen
        name="VerdePantano"
        component={VerdePantano}
      />
      <Tab.Screen
        name="Aplicativo"
        component={Aplicativo}
      />
      <Tab.Screen
        name="Tecnologias"
        component={Tecnologias}
      />
            <Tab.Screen
        name="Desenvolvedores"
        component={Creditos}
      />
    </Tab.Navigator>
  )
}
