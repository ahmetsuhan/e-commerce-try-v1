import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'; 

import rootReducer from './rootReducer';

const middleWares = [logger];

 const store = createStore(rootReducer,applyMiddleware(...middleWares));

 export const persistor = persistStore(store);

export default store;

