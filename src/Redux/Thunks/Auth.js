import { startLoading, stopLoading } from '../Actions/Util';
import { loginApi, signUpApi } from '../../api';
import { adminLogin, adminLoginFail } from '../Actions/AdminAction';

export const Login = (loginData) => {
	return async (dispatch) => {
		dispatch(startLoading());
		await loginApi(loginData)
			.then((response) => {
				dispatch(stopLoading());
				if (response.status === 200) {
					dispatch(adminLogin());
				} else if (response.status === 400) {
					dispatch(adminLoginFail(response.msg));
				}
			})
			.catch((err) => {
				console.log(err, '<>?');
				dispatch(adminLoginFail(err.msg));
			});
	};
};

export const SignUP = (loginData) => {
	return async (dispatch) => {
		await signUpApi(loginData).then((response) => {
			dispatch(stopLoading());
			if (response.status === 200) {
				dispatch(adminLogin());
			}
		});
	};
};
