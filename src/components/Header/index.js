import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Logo, LogoImage, Cart, Counter} from './styles';

import LogoImg from '../../assets/images/logo.png';

export default function Header({navigation}) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo onPress={() => navigation.navigate('Main')}>
        <LogoImage source={LogoImg} alt="Rocketshoes" />
      </Logo>
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={36} color="#fff" />
        <Counter>{cartSize}</Counter>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
