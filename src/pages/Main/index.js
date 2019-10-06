import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {bindActionCreators} from 'redux';

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

  handleAddProduct = product => {
    const {addToCart} = this.props;

    addToCart(product);
  };

  renderProduct = ({item}) => {
    return (
      <Card>
        <Image source={{uri: item.image}} />
        <Name>{item.title}</Name>
        <Price>{item.priceFormatted}</Price>
        <Button onPress={() => this.handleAddProduct(item)}>
          <ItemAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ItemAmountText>0</ItemAmountText>
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

const mapDispatchToProps = dispatch => bindActionCreators(CarActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Main);
