import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const enhancers = composeEnhancer(applyMiddleware(thunkMiddleware));

const defaultState = {
	AdminReducer: {
		adminRights: false,
	},
};

const Store = createStore(createRootReducer(), defaultState, enhancers);

export default Store;
