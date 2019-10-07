import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

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
  ProductList,
} from './styles';

import {formatPrice} from '../../utils/format';
import * as CarActions from '../../store/modules/cart/actions';

function Cart({cart, removeFromCart, updateAmountRequest, total}) {
  const handleDecrementAmount = product => {
    updateAmountRequest(product.id, product.amount - 1);
  };

  const handleIncrementAmount = product => {
    updateAmountRequest(product.id, product.amount + 1);
  };

  const renderProduct = ({item}) => {
    return (
      <Product>
        <ProductLine>
          <Image
            source={{
              uri: item.image,
            }}
          />
          <NamePrice>
            <Name>{item.title}</Name>
            <Price>{item.priceFormatted}</Price>
          </NamePrice>
          <RemoveButton onPress={() => removeFromCart(item.id)}>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </RemoveButton>
        </ProductLine>
        <AmountLine>
          <AmountControl>
            <DecButton onPress={() => handleDecrementAmount(item)}>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </DecButton>
            <Amount>{item.amount}</Amount>
            <AddButton onPress={() => handleIncrementAmount(item)}>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </AddButton>
          </AmountControl>
          <Subtotal>{item.subtotal}</Subtotal>
        </AmountLine>
      </Product>
    );
  };

  return (
    <Container>
      <Card>
        <ProductList
          vertical
          data={cart}
          keyExtractor={item => String(item.id)}
          renderItem={renderProduct}
        />

        <TotalLine>
          <TotalTitle>Total</TotalTitle>
          <Total>{total}</Total>
        </TotalLine>
      </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch => bindActionCreators(CarActions, dispatch);

Cart.propTypes = {
  cart: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.object,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
    amount: PropTypes.number,
    subtotal: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
