import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumtotal, product) => {
        return sumtotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  const handleDecrementAmount = product => {
    dispatch(CarActions.updateAmountRequest(product.id, product.amount - 1));
  };

  const handleIncrementAmount = product => {
    dispatch(CarActions.updateAmountRequest(product.id, product.amount + 1));
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
          <RemoveButton
            onPress={() => dispatch(CarActions.removeFromCart(item.id))}>
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

Cart.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.object,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
    amount: PropTypes.number,
    subtotal: PropTypes.string,
  }),
};

Cart.defaultProps = {
  item: {},
};
