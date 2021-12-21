
import {
    LOADING,
    SET_USER,
} from '../actions/actionTypes'

export const initialState = {
    user: null,
    loading: false,
}

export default function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER: 
            return {
                ...state,
                user: action.user
            }
            case LOADING:
                return {
                    ...state,
                    loading: true,
                };    
        default:
            return state
    }
}