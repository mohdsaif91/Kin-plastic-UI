import { combineReducers } from 'redux';

import { AdminReducer } from './Reducers/AdminReducers';

const createRootReducer = () => {
	//this grabs all the reducers and generators one
	return combineReducers({
		AdminReducer: AdminReducer,
	});
};

export default createRootReducer;
