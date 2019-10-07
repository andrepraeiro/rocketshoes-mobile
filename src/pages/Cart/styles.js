import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background: #000;
`;

export const ProductLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Image = styled.Image`
  height: 60px;
  width: 60px;
`;
export const NamePrice = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.Text`
  width: 150px;
`;
export const Price = styled.Text`
  font-weight: bold;
`;
export const RemoveButton = styled.TouchableOpacity`
  background: #ddd;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;
export const AmountLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ddd;
  padding: 10px 0;
  margin: 5px 0;
`;
export const DecButton = styled.TouchableOpacity`
  padding: 0 5px;
`;
export const Amount = styled.Text`
  border: 1px solid #eee;
  background: #fff;
  width: 50px;
`;
export const AddButton = styled.TouchableOpacity`
  padding: 0 5px;
`;
export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding: 0 10px;
`;
export const TotalLine = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
export const TotalTitle = styled.Text`
  font-size: 18px;
  color: #666;
`;
export const Total = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  margin: 0 15px;
`;

export const AmountControl = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Product = styled.View``;

export const ProductList = styled.FlatList`
  flex: 200;
`;
