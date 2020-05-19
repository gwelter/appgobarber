import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../pages/Dashboard';

const App = createStackNavigator();

export const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);
