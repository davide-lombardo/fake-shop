import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import SingleProductReducer from './SingleProductReducer';
import ShopReducer from './ShopReducer';


const allReducers = combineReducers ({
   user: LoginReducer,
   singleProduct: SingleProductReducer,
   shop: ShopReducer,
})

export default allReducers;



