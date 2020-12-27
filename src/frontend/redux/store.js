import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//middleware следка за actions
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
window.store = store;
export default store;
