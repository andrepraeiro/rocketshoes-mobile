import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    }
    // {
    //   headerLayoutPreset: 'center',
    //   headerBackTitleVisible: false,
    //   defaultNavigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#7159c1',
    //     },
    //     headerTintColor: '#fff',
    //   },
    // }
  )
);

export default Routes;
