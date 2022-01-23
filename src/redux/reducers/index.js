import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import ShopReducer from './ShopReducer';
import SingleProductReducer from './SingleProductReducer';


const allReducers = combineReducers ({
   user: LoginReducer,
   shop: ShopReducer,
   single: SingleProductReducer,
});

export default allReducers;



