import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import EscudoScreen from "../componentes/screens/EscudoScreen"
import JogadoresScreen from "../componentes/screens/JogadoresScreen"
import TitulosScreen from "../componentes/screens/TitulosScreen"

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen  
      name='EscudoScreen' 
      component={EscudoScreen}
      options={{
          title: "Início",
          drawerIcon: ({color, size}) => <Ionicons name='shield' color={color} size={size} />
        }}
      />

      <Drawer.Screen  
      name='JogadoresScreen' 
      component={JogadoresScreen}
      options={{
        title: "Início",
        drawerIcon: ({color, size}) => <Ionicons name='people' color={color} size={size} />
      }}
      />

      <Drawer.Screen  
      name='TitulosScreen' 
      component={TitulosScreen}
      options={{
        title: "Início",
        drawerIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size} />
      }}
      />
    </Drawer.Navigator>

  )
}
