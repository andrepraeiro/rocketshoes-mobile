import {createStore} from 'redux';

import rootreducer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;
const store = createStore(rootreducer, enhancer);

export default store;
