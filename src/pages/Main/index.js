import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({products: response.data});
  }

  renderProduct = ({item}) => {
    return (
      <Card>
        <Image source={{uri: item.image}} />
        <Name>{item.title}</Name>
        <Price>{item.price}</Price>
        <Button>
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

export default Main;
