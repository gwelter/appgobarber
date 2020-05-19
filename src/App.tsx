import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import { AuthRoutes } from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <AppProvider>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ backgroundColor: '#312e38', flex: 1 }}>
        <AuthRoutes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
