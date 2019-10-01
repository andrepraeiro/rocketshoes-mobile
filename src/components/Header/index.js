import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Logo, Cart, Counter} from './styles';

import LogoImg from '../../assets/images/logo.png';

export default function Header({navigation}) {
  return (
    <Container>
      <Logo source={LogoImg} alt="Rocketshoes" />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={36} color="#fff" />
        <Counter>1</Counter>
      </Cart>
    </Container>
  );
}
