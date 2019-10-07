import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import ReactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({host: 'localhost'})
    .useReactNative()
    .use(reactotronRedux())
    .use(ReactotronSaga())
    .connect();
  console.tron = tron;
  tron.clear();
}
