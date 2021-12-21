
import {
    FETCH_PRODUCTS_HOME,
    FETCH_PRODUCTS,
    LOADING,
} from '../actions/actionTypes'

export const initialState = {
    loading: false,
    products: [],
}

export default function ProductReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_HOME:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case FETCH_PRODUCTS:
                return {
                    ...state,
                    products: action.payload,
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

        // export default function fetchSearchData(state = initialState, action) {
    //     return async (dispatch) => {
    //     // Initiate loading state
    //     dispatch({
    //     type: FETCH_SEARCH_DATA
    //     });
    //     try {
    //     // Call the API
    //     const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
        
    //     // Update payload in reducer on success
    //     dispatch({
    //     type: FETCH_SEARCH_SUCCESS,
    //     payload: result,
    //     currentPage: args.pageCount
    //     });
    //     } catch (err) {
    //     // Update error in reducer on failure
    //     dispatch({
    //     type: FETCH_SEARCH_FAILURE,
    //     error: err
    //     });
    //     }
    //     };
    //     }
