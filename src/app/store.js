import {combineReducers, createStore} from 'redux';

import {inventoryReducer} from '../features/inventory/inventorySlice';
import {cartReducer} from '../features/cart/cartSlice';
import {
  currencyFilterReducer,
} from '../features/currencyFilter/currencyFilterSlice';

export const store = createStore(combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
}));