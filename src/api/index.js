import Axios from 'axios';

// const url = 'http://localhost:5000';
const url = 'https://kinserver97.herokuapp.com';
const v1 = `${url}/api/v1`;

//Auth
export const loginApi = (data) => Axios.post(`${v1}/auth/login`, data);
export const signUpApi = (data) => Axios.post(`${v1}/auth/signUp`, data);

//configuration
export const settingApiHome = (data) => Axios.post(`${v1}/setting/home`, data);
export const getSettingApiHome = () => Axios.get(`${v1}/setting/home`);
