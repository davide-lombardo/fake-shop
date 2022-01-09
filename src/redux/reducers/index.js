import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import ShopReducer from './ShopReducer';


const allReducers = combineReducers ({
   user: LoginReducer,
   shop: ShopReducer,
})

export default allReducers;



