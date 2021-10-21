import { ADMIN_ACTION_TYPE } from '../Actions/AdminAction';

export function AdminReducer(state = {}, action) {
	switch (action.type) {
		case ADMIN_ACTION_TYPE.ADMIN_LOGIN:
			return {
				...state,
				adminRights: true,
				error: false,
			};
		case ADMIN_ACTION_TYPE.ADMIN_LOGIN_FAIL:
			return {
				...state,
				adminRights: false,
				error: true,
			};
		case ADMIN_ACTION_TYPE.ADMIN_LOGOUT:
			return {
				...state,
				adminRights: false,
			};
		default:
			return state;
	}
}
