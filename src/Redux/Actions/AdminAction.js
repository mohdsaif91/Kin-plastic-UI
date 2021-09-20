export const ADMIN_ACTION_TYPE = {
	ADMIN_LOGIN: 'ADMIN_LOGIN',
	ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',
	ADMIN_LOGOUT: 'ADMIN_LOGOUT',
};

export const adminLogin = () => {
	return {
		type: ADMIN_ACTION_TYPE.ADMIN_LOGIN,
	};
};

export const adminLogout = () => {
	return { type: ADMIN_ACTION_TYPE.ADMIN_LOGOUT };
};

export const adminLoginFail = (data) => {
	return {
		type: ADMIN_ACTION_TYPE.ADMIN_LOGIN_FAIL,
		data,
	};
};
