import styled from 'styled-components/native';
// import {MdShoppingBasket} from 'react-icons/md';

export const Container = styled.View`
  background: #000;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
`;
export const Logo = styled.Image``;

export const Cart = styled.View`
  align-items: center;
`;
export const CartText = styled.View`
  text-align: right;
  margin-right: 10px;
`;
export const CartTitle = styled.Text`
  text-align: right;
  color: #fff;
`;
export const CartAmount = styled.Text`
  text-align: right;
  color: #999;
  font-size: 12px;
`;
export const Icon = styled.Text`
  color: #fff;
`;
