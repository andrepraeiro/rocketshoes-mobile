import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

import {Container, Logo, Cart, Counter} from './styles';

import LogoImg from '../../assets/images/logo.png';

function Header({navigation, cartSize}) {
  return (
    <Container>
      <Logo source={LogoImg} alt="Rocketshoes" />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={36} color="#fff" />
        <Counter>{cartSize}</Counter>
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
