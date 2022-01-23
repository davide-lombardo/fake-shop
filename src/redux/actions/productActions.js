import axios from 'axios';

import {
    FETCH_SINGLE_PRODUCT_START,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_FAIL,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL, 
    LOADING,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CHANGE_CART_QTY,
} from './actionTypes';


const fetchSingleProductStart = () => ({
    type: FETCH_SINGLE_PRODUCT_START,
})
  
const fetchSingleProductFail = (error) => ({
    type: FETCH_SINGLE_PRODUCT_FAIL,
    payload: error,
})

const fetchProductsStart = () => ({
    type: FETCH_PRODUCTS_START,
})
  
const fetchProductsFail = (error) => ({
    type: FETCH_PRODUCTS_FAIL,
    payload: error,
})

export const setLoading = () => {
    return {
        type: LOADING,
    }      
}

export const addToBasket = (itemId) => {
    return {
        type: ADD_TO_BASKET,
        payload: {
            id: itemId,
        },
    }
}

export const removeFromBasket = (itemId) => {
    return {
        type: REMOVE_FROM_BASKET,
        payload: itemId,
    }
}

export const changeCardQty = (itemId, value) => {
    return {
        type: CHANGE_CART_QTY,
        payload: {
            id: itemId,
            qty: value,
        },
    }
}

export const fetchProducts = (query) => (dispatch) => {
    dispatch(fetchProductsStart())
    axios
       .get(`https://fakestoreapi.com/products/category/${query}`)
       .then(response =>
               dispatch({
                   type: FETCH_PRODUCTS_SUCCESS,
                   payload: response.data,
               })
           ) 
           .catch(err => dispatch(fetchProductsFail(err.message)))  
}

export const fetchSingleProduct = (id) => (dispatch) => {
    dispatch(fetchSingleProductStart())
    axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then(response =>
            dispatch({
                type: FETCH_SINGLE_PRODUCT_SUCCESS,
                payload: response.data,
            })
        )
        .catch(err => dispatch(fetchSingleProductFail(err.message)))
 };
 








