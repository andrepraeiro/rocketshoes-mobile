import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductLine,
  Image,
  NamePrice,
  Name,
  Price,
  RemoveButton,
  AmountLine,
  DecButton,
  Amount,
  AddButton,
  Subtotal,
  TotalLine,
  TotalTitle,
  Total,
  Card,
  AmountControl,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Card>
        <ProductLine>
          <Image
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            }}
          />
          <NamePrice>
            <Name>Tênis de Caminhada Leve Confortável</Name>
            <Price>R$ 179,90</Price>
          </NamePrice>
          <RemoveButton>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </RemoveButton>
        </ProductLine>
        <AmountLine>
          <AmountControl>
            <DecButton>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </DecButton>
            <Amount>10</Amount>
            <AddButton>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </AddButton>
          </AmountControl>
          <Subtotal>R$ 1.790,90</Subtotal>
        </AmountLine>
        <TotalLine>
          <TotalTitle>Total</TotalTitle>
          <Total>R$ 1.790,90</Total>
        </TotalLine>
      </Card>
    </Container>
  );
}
