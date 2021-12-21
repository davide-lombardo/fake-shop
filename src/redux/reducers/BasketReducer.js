
import {
    LOADING,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CHANGE_CART_QTY,
    LOAD_CURRENT_ITEM, 
} from '../actions/actionTypes'

export const initialState = {
    basket: [],
    products: [],
    loading: false,
    currentItem: [],
}


export default function BasketReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CART_QTY:
            return {
                ...state, 
                basket: state.basket.map(item => item.id === action.payload.id 
                    ? { ...item, qty: +action.payload.qty } : item),
            };
        case ADD_TO_BASKET:
            const item = state.products.find(product => product?.id === action.payload?.id)
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
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
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