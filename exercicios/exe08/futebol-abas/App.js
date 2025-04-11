import { PaperProvider } from 'react-native-paper';
import { NavigationContainer, FlatList } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import EscudoScreen from './screens/EscudoScreen'
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator()

export default function App() {

  return (

    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1e293b',
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#94a3b8',
        }}>

          <Tab.Screen
            name='EscudoScreen'
            component={EscudoScreen}
            options={{
              title: 'Escudo',
              headerTitleAlign: 'center',
              headerTintColor: 'red',
              headerStyle: {
                backgroundColor: '#1e293b'
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />
            }}
          />

          <Tab.Screen
            name='JogadoresScreen'
            component={JogadoresScreen}
            options={{
              title: 'Jogador',
              headerTitleAlign: 'center',
              headerTintColor: 'red',
              headerStyle: {
                backgroundColor: '#1e293b'
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
            }}
          />

          <Tab.Screen
            name='TitulosScreen'
            component={TitulosScreen}
            options={{
              title: 'Titulos',
              headerTintColor: 'red',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#1e293b'
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
