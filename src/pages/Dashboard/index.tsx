import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';
// import { Container } from './styles';

export const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Button title="Logout" onPress={signOut} />
    </View>
  );
};
