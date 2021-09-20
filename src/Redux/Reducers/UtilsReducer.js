import { utilsAction } from '../Actions/Util';

export function UtilsReducer(state = {}, action) {
	switch (action.type) {
		case utilsAction.START_LOADING:
			return {
				loading: true,
			};
		case utilsAction.STOP_LOADING:
			return {
				loading: false,
			};
		default:
			return state;
	}
}
