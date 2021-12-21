import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// function saveToLocalStorage(state) {
//     try {
//       const serialisedState = JSON.stringify(state);
//       localStorage.setItem("persistantState", serialisedState);
//     } catch (err) {
//       console.warn(err);
//     }
// }
  
// function loadFromLocalStorage() {
//     try {
//         const serialisedState = localStorage.getItem("persistantState");
//         if (serialisedState === null) return undefined;
//         return JSON.parse(serialisedState);
//     } catch (err) {
//         console.warn(err);
//         return undefined;
//     }
// }

const store = createStore(
    allReducers,
    initialState,
    //loadFromLocalStorage(),
    composeEnhancer(applyMiddleware(thunk))
)


// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store
