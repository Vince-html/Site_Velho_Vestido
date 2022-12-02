import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import product from './product';

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({ product });

const store = configureStore({ reducer, middleware });

export default store;
