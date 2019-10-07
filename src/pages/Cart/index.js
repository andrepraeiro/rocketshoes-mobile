import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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

import * as CarActions from '../../store/modules/cart/actions';

function Cart({cart, removeFromCart, updateAmount}) {
  const handleDecrementAmount = product => {
    updateAmount(product.id, product.amount - 1);
  };

  const handleIncrementAmount = product => {
    updateAmount(product.id, product.amount + 1);
  };

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
                <RemoveButton onPress={() => removeFromCart(product.id)}>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </RemoveButton>
              </ProductLine>
              <AmountLine>
                <AmountControl>
                  <DecButton onPress={() => handleDecrementAmount(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </DecButton>
                  <Amount>{product.amount}</Amount>
                  <AddButton onPress={() => handleIncrementAmount(product)}>
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

const mapDispatchToProps = dispatch => bindActionCreators(CarActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
