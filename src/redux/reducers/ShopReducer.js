import {
    LOADING,
    FETCH_SINGLE_PRODUCT_START,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_FAIL, 
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CHANGE_CART_QTY,
} from '../actions/actionTypes'

const initialState = {
    basket: [],
    products: [],
    singleProduct: [],
    loading: false,
}


export default function BasketReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProduct: action.payload,
                loading: false,
            };
        case FETCH_SINGLE_PRODUCT_START:
        case FETCH_PRODUCTS_START: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_PRODUCTS_SUCCESS:
                return {
                    ...state,
                    products: action.payload,
                    loading: false,
                };
        case FETCH_SINGLE_PRODUCT_FAIL:
        case FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CHANGE_CART_QTY:
            return {
                ...state, 
                basket: state.basket.map(item => item.id === action.payload.id 
                    ? { ...item, qty: +action.payload.qty } : item),
            };
        case ADD_TO_BASKET:
            const item = state.products.find(product => product.id === action.payload.id)
            const inBasket = state.basket.find(item => item.id === action.payload.id ? true : false)

            return {
                ...state, 
                basket: inBasket 
                    ? state.basket.map(item =>
                        item.id === action.payload.id 
                        ? { ...item, qty: item.qty + 1 } : item 
                    ) 
                : [ ...state.basket, { ...item, qty: 1 }],
            };
        case REMOVE_FROM_BASKET:
            return {
                ...state, 
                basket: state.basket.filter(item => item.id !== action.payload)
            };
        case LOADING:
        return {
            ...state,
            loading: true,
        }; 
        default:
            return state
    }
}