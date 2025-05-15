import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MegaSenaScreen from './components/screens/MegaSenaScreen';
import JogoDoBichoScreen from './components/screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#f0f0f0' },
            headerTintColor: '#333',
            tabBarActiveTintColor: '#1976d2',
            tabBarInactiveTintColor: '#999',
            tabBarStyle: { backgroundColor: '#fff'},

            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Mega Sena') {
                iconName = 'numeric-6-box-multiple';
              } else if (route.name === 'Jogo do Bicho') {
                iconName = 'paw';
              }
              return <Icon name={iconName} color={color} size={size} />;
            },
            tabBarLabelStyle: { fontSize: 12 },
          })}
        >
          <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
