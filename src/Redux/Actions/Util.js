export const utilsAction = {
	START_LOADING: 'START_LOADING',
	STOP_LOADING: 'STOP_LOADING',
};

export function startLoading() {
	return {
		type: utilsAction.START_LOADING,
	};
}

export function stopLoading() {
	return {
		type: utilsAction.STOP_LOADING,
	};
}
