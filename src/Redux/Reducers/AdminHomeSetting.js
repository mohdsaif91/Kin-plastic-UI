import { AMDIN_HOME_ACTION } from '../Actions/AdminHomeAction';

export function AdminHomeSetting(state = {}, action) {
	switch (action.type) {
		case AMDIN_HOME_ACTION.SETTING_UPDATE_SUCESSFULL:
			return {
				...state,
				setting: action.data,
				error: false,
			};
		case AMDIN_HOME_ACTION.SETTING_UPDATE_UNSUCESSFULL:
			return {
				...state,
				error: true,
			};
		case AMDIN_HOME_ACTION.GET_SETTING_SUCESSFULL:
			return {
				...state,
				error: false,
				setting: action.data[0],
			};
		case AMDIN_HOME_ACTION.GET_SETTING_UNSUCESSFULL:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
}
