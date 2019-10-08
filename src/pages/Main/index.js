import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {formatPrice} from '../../utils/format';

import api from '../../services/api';

import {
  Container,
  Card,
  Image,
  Name,
  Price,
  Button,
  ButtonText,
  ItemAmount,
  ItemAmountText,
} from './styles';

import * as CarActions from '../../store/modules/cart/actions';

export default function Main() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const amount = useSelector(state =>
    state.cart.reduce((sumamount, product) => {
      sumamount[product.id] = product.amount;
      return sumamount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(prod => ({
        ...prod,
        priceFormatted: formatPrice(prod.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CarActions.addToCartRequest(id));
  }

  function renderProduct({item}) {
    return (
      <Card>
        <Image source={{uri: item.image}} />
        <Name>{item.title}</Name>
        <Price>{item.priceFormatted}</Price>
        <Button onPress={() => handleAddProduct(item.id)}>
          <ItemAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ItemAmountText>{amount[item.id]}</ItemAmountText>
          </ItemAmount>
          <ButtonText>Adicionar</ButtonText>
        </Button>
      </Card>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Rocketshoes',
};

Main.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.object,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
    amount: PropTypes.number,
    subtotal: PropTypes.string,
  }),
};

Main.defaultProps = {
  item: {},
};
