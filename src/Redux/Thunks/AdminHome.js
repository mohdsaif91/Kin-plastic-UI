import { getSettingApiHome, settingApiHome } from '../../api';
import {
	getSettingSucessfull,
	getSettingUnSucessfull,
	updateSettingSucessfull,
	updateSettingUnsucessfull,
} from '../Actions/AdminHomeAction';
import { startLoading, stopLoading } from '../Actions/Util';

export const updateSettingHome = (adminHomeData) => {
	return async (dispatch) => {
		dispatch(startLoading());
		await settingApiHome(adminHomeData)
			.then((response) => {
				dispatch(startLoading());
				if (response.status === 201) {
					dispatch(updateSettingSucessfull(response.data));
				}
			})
			.catch((err) => {
				dispatch(updateSettingUnsucessfull(err));
			});
	};
};

export const getSettingHome = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		await getSettingApiHome()
			.then((response) => {
				dispatch(stopLoading());
				if (response.status === 200) {
					dispatch(getSettingSucessfull(response.data));
				}
			})
			.catch((err) => {
				dispatch(getSettingUnSucessfull(err));
			});
	};
};
