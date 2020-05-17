import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};
