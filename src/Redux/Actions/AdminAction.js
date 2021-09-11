export const ADMIN_ACTION_TYPE = {
	ADMIN_LOGIN: 'ADMIN_LOGIN',
	ADMIN_LOGOUT: 'ADMIN_LOGOUT',
};

export const adminLogin = () => {
	console.log('called Action <>?');
	return {
		type: ADMIN_ACTION_TYPE.ADMIN_LOGIN,
	};
};

export const adminLogout = () => {
	return { type: ADMIN_ACTION_TYPE.ADMIN_LOGOUT };
};
