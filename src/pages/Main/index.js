import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(prod => ({
      ...prod,
      priceFormatted: formatPrice(prod.price),
    }));

    this.setState({products: data});
  }

  handleAddProduct = id => {
    const {addToCartRequest} = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({item}) => {
    const {amount} = this.props;
    return (
      <Card>
        <Image source={{uri: item.image}} />
        <Name>{item.title}</Name>
        <Price>{item.priceFormatted}</Price>
        <Button onPress={() => this.handleAddProduct(item.id)}>
          <ItemAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ItemAmountText>{amount[item.id]}</ItemAmountText>
          </ItemAmount>
          <ButtonText>Adicionar</ButtonText>
        </Button>
      </Card>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Rocketshoes',
};

Main.propTypes = {
  amount: PropTypes.objectOf(PropTypes.number).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(CarActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
