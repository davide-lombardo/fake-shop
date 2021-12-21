import axios from 'axios'
import {
    FETCH_PRODUCTS_HOME,
    FETCH_PRODUCTS,
    FETCH_SINGLE_PRODUCT, 
    LOADING,
    SET_USER,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CHANGE_CART_QTY,
    LOAD_CURRENT_ITEM,  
} from './actionTypes';


export const fetchProductsHome = (dispatch) => {
    axios
       .get(`https://fakestoreapi.com/products`)
       .then(response =>
               dispatch({
                   type: FETCH_PRODUCTS_HOME,
                   payload: response.data,
               })
           ) 
           .catch(err => console.log(err))  
}

export const fetchProducts = (query) => (dispatch) => {
    axios
       .get(`https://fakestoreapi.com/products/category/${query}`)
       .then(response =>
               dispatch({
                   type: FETCH_PRODUCTS,
                   payload: response.data,
               })
           ) 
           .catch(err => console.log(err))  
}

export const fetchSingleProduct = (id) => (dispatch) => {
   axios
       .get(`https://fakestoreapi.com/products/${id}`)
       .then(response =>
           dispatch({
               type: FETCH_SINGLE_PRODUCT,
               payload: response.data,
           })
       )
       .catch(err => console.log(err));
};


export const setLoading = () => {
   return {
       type: LOADING,
   }      
}

export const setUser = () => {
    return {
        type: SET_USER,
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

export const loadCurrentItem = (id) => (dispatch) => {
    axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then(response =>
            dispatch({
                type: LOAD_CURRENT_ITEM,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
}

export const saveToLocalStorage = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  };
  
export const loadFromLocalStorage = () => {
try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
} catch (err) {
    console.error(err);
    return undefined;
}
};

// export const saveBaskestToStorage = (itemId) => {
//     return {
//         type: REMOVE_FROM_BASKET,
//         payload: itemId,
//     }
// }

// const basketFromLocalStorage = JSON.parse(localStorage.getItem('products') || '[]')

// useEffect(() => {
//     localStorage.setItem('basket', JSON.stringify(basket))   
// }, [basket])

// const basketFromLocalStorage = localStorage.getItem('basket')
// return basketFromLocalStorage ? JSON.parse(basketFromLocalStorage) : []