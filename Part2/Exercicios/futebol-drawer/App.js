import React from 'react';
import 'react-native-gesture-handler';

import { PaperProvider, MD3DarkTheme } from 'react-native-paper';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import DrawerRoutes from './src/DrawerRoutes';

export default function App() {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <NavigationContainer theme={DarkTheme}>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}
