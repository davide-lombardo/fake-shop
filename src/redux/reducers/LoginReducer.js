
import {
    REGISTER_START,
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT_START, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL,
    SET_USER, 
} from '../actions/actionTypes'

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

export default function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER_START: 
        case LOGIN_START:
        case LOGOUT_START: 
            return {
                ...state,
                loading: true,
            }
        case LOGOUT_SUCCESS: 
        return {
            ...state,
            currentUser: null,
        }
        case SET_USER:
        return {
            ...state,
            loading: false,
            currentUser: action.payload,
        }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:  
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}