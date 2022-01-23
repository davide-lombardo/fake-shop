import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './reducers/index';
import thunk from 'redux-thunk';
import { saveState, loadState } from './actions/localStorageActions';


const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    persistedState,
    composeEnhancer(
        applyMiddleware(
            thunk,
        ))
)


store.subscribe(() => {
    saveState({
        shop: store.getState().shop,
    })
}) 

export default store
