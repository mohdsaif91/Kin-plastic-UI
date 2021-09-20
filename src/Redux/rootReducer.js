import { combineReducers } from 'redux';

import { AdminReducer } from './Reducers/AdminReducers';
import { AdminHomeSetting } from './Reducers/AdminHomeSetting';

const createRootReducer = () => {
	//this grabs all the reducers and generators one
	return combineReducers({
		AdminReducer: AdminReducer,
		AdminHomeSetting,
	});
};

export default createRootReducer;
