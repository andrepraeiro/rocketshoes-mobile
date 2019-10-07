import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';

import store from './store';
import * as NavigationService from './store/services/navigationService';

export default class App extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Routes
            ref={nav => {
              this.navigator = nav;
            }}
          />
        </Provider>
      </>
    );
  }
}
