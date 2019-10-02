import styled from 'styled-components/native';

export const Container = styled.View`
  background: #000;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`;
export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 200px;
  height: 26px;
`;

export const Cart = styled.TouchableOpacity`
  align-items: flex-end;
  padding: 0 5px;
`;

export const Counter = styled.Text`
  position: absolute;
  text-align: center;
  line-height: 14px;
  top: -3px;
  right: 2px;
  padding: 2px;
  height: 18px;
  width: 18px;
  color: #fff;
  background: #7159c1;
  font-size: 12px;
  border-radius: 10px;
`;
