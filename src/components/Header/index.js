import React from 'react';

import {
  Container,
  Logo,
  Cart,
  CartText,
  CartTitle,
  CartAmount,
  Icon,
} from './styles';

import LogoImg from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo source={LogoImg} alt="Rocketshoes" />
      <Cart>
        <CartText>
          <CartTitle>Meu Carrinho</CartTitle>
          <CartAmount>2 Itens</CartAmount>
        </CartText>
        <Icon size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
