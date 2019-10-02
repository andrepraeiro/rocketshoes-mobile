import styled from 'styled-components/native';
import {darken} from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background: #000;
`;

export const Card = styled.View`
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
  padding: 5px;
  margin: 0 15px;
  width: 200px;
  height: 90%;
`;
export const Image = styled.Image`
  height: 50%;
  width: 100%;
`;
export const Name = styled.Text`
  font-size: 12px;
  margin-bottom: auto;
`;
export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  margin-top: auto;
  flex-direction: row;
  align-items: center;
`;

export const ItemAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.03, '#7159c1')};
`;

export const ItemAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
