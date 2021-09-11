import { ADMIN_ACTION_TYPE } from '../Actions/AdminAction';

export function AdminReducer(state = {}, action) {
	switch (action.type) {
		case ADMIN_ACTION_TYPE.ADMIN_LOGIN:
			console.log('called reducer <>?');
			return {
				...state,
				adminRights: true,
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
