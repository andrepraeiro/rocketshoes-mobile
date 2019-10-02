import React from 'react';
import {connect} from 'react-redux';

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
  Product,
} from './styles';

function Cart({cart}) {
  console.tron.log(cart);
  return (
    <Container>
      <Card>
        {cart.map(product => (
          <>
            <Product key={product.id}>
              <ProductLine>
                <Image
                  source={{
                    uri: product.image,
                  }}
                />
                <NamePrice>
                  <Name>{product.title}</Name>
                  <Price>{product.priceFormatted}</Price>
                </NamePrice>
                <RemoveButton>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </RemoveButton>
              </ProductLine>
              <AmountLine>
                <AmountControl>
                  <DecButton>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </DecButton>
                  <Amount>{product.amount}</Amount>
                  <AddButton>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </AddButton>
                </AmountControl>
                <Subtotal>R$ 1.790,90</Subtotal>
              </AmountLine>
            </Product>
          </>
        ))}

        <TotalLine>
          <TotalTitle>Total</TotalTitle>
          <Total>R$ 1.790,90</Total>
        </TotalLine>
      </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Cart);
