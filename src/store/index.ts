import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const initState = {}

const store = createStore(rootReducer, initState, applyMiddleware(thunk));

export default store;