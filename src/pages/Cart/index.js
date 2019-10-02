import React from 'react';

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
          <RemoveButton>X</RemoveButton>
        </ProductLine>
        <AmountLine>
          <AmountControl>
            <DecButton>-</DecButton>
            <Amount>10</Amount>
            <AddButton>+</AddButton>
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
