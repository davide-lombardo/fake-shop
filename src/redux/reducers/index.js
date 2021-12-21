import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import ProductsReducer from './ProductsReducer';
import BasketReducer from './BasketReducer';
import SingleProductReducer from './SingleProductReducer';
import ShopReducer from './ShopReducer';


const allReducers = combineReducers ({
   login: LoginReducer,
   singleProduct: SingleProductReducer,
   products: ProductsReducer,
   basket: BasketReducer,
   shop: ShopReducer,
})

export default allReducers;



