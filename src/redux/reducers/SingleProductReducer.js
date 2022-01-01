
import {
    FETCH_SINGLE_PRODUCT_START,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_FAIL, 
    LOADING,
} from '../actions/actionTypes'

export const initialState = {
    loading: false,
    product: [],
}

export default function SingleProductReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SINGLE_PRODUCT_START: 
        return {
            ...state,
            loading: true,
        }
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                loading: false,
            };
        case FETCH_SINGLE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };    
        default:
            return state
            };
            
    }