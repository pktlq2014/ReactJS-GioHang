// Bước 3: tạo reducers
import {combineReducers} from 'redux';
import products from './products';
import card from './card';
import message from './message';
const appReducers = combineReducers({
   products : products,
   card : card,
   message : message
});

export default appReducers;