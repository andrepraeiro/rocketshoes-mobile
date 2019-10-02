import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      // headerMode: 'none',
      // navigationOptions: {
      //   headerVisible: false,
      // },
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
    }
  )
);

export default Routes;
