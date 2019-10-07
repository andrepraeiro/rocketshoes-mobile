import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, Logo, LogoImage, Cart, Counter} from './styles';

import LogoImg from '../../assets/images/logo.png';

function Header({navigation, cartSize}) {
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

  cartSize: PropTypes.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
