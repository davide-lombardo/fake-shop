
import {
    FETCH_SINGLE_PRODUCT, 
    LOADING,
} from '../actions/actionTypes'

export const initialState = {
    loading: false,
    product: [],
}

export default function SingleProductReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
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