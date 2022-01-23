import {
    LOADING,
    FETCH_SINGLE_PRODUCT_START,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_FAIL,
} from '../actions/actionTypes';

const initialState = {
    singleProduct: [],
    loading: false,
};


export default function SingleProductReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SINGLE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProduct: action.payload,
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
    }
}