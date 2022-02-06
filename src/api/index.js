import Axios from "axios";

const url = "http://localhost:5000";
// const url = "https://kinserver97.herokuapp.com";
const v1 = `${url}/api/v1`;

//Auth
export const loginApi = (data) => Axios.post(`${v1}/auth/login`, data);
export const signUpApi = (data) => Axios.post(`${v1}/auth/signUp`, data);

//home page
export const getHomePageData = () => Axios.get(`${v1}/setting/homePage`);

//configuration
export const settingApiHome = (data) => Axios.post(`${v1}/setting/home`, data);
export const getSettingApiHome = () => Axios.get(`${v1}/setting/home`);

//category
export const addCategoryAPI = (data) => Axios.post(`${v1}/category`, data);
export const getCategoryAPI = () => Axios.get(`${v1}/category`);
export const updateCategoriesAPI = (data) => Axios.put(`${v1}/category`, data);
export const deleteCategoryAPI = (id) =>
  Axios.delete(`${v1}/category`, { params: { deleteId: id } });

//Product
export const addProductApi = (data) => Axios.post(`${v1}/product`, data);
export const getProductApi = () => Axios.get(`${v1}/product`);
export const deleteProductApi = (deleteId, productImage) =>
  Axios.delete(`${v1}/product/${deleteId}/${productImage}`);
export const getProductByCategoryAPI = (catName) =>
  Axios.get(`${v1}/product/getProduct/${catName}`);
export const getAllProductsAPI = () =>
  Axios.get(`${v1}/product/getAllProducts`);
export const addBestProductAPI = (data) =>
  Axios.post(`${v1}/product/addBestProduct`, data);
export const getBestProductAPI = () => Axios.get(`${v1}/product/bestProduct`);
export const deleteBestProductAPI = (id) => Axios.delete(`${v1}/product/${id}`);

//Services
export const addServiceAPI = (data) => Axios.post(`${v1}/service`, data);
export const getServicesAPI = () => Axios.get(`${v1}/service`);

// Aboutus
export const updateOwnerAPI = (data) => Axios.post(`${v1}/aboutus/owner`, data);
export const getOwnerDataAPI = () => Axios.get(`${v1}/aboutus/owner`);
export const addEmployeeAPI = (data) =>
  Axios.post(`${v1}/aboutus/employee`, data);
export const getEmployeeAPI = () => Axios.get(`${v1}/aboutus/employee`);
export const updateEmployeeAPI = (data) =>
  Axios.put(`${v1}/aboutus/employee/update`, data);
export const deleteEmployeeAPI = (id, imageName) =>
  Axios.delete(`${v1}/aboutus/employee/${id}/${imageName}`);
export const saveContactLocationAPI = (data) =>
  Axios.put(`${v1}/aboutus/organasation`, data);
export const getOrganisationAPI = () => Axios.get(`${v1}/aboutus/organisation`);
export const getOrganisationOwnerAPI = () =>
  Axios.get(`${v1}/aboutus/organisationOwner`);

//Email Part
export const sendInqueryAPI = (data) => Axios.post(`${v1}/email/inquery`, data);
export const getEmailAPI = () => Axios.get(`${v1}/email/inquery`);

//Client
export const addClientAPI = (data) => Axios.post(`${v1}/client`, data);
export const getClientAPI = () => Axios.get(`${v1}/client`);
export const editClientApi = (data) => Axios.put(`${v1}/client`, data);
export const deleteClientAPI = (id, imageName) =>
  Axios.delete(`${v1}/client/${id}/${imageName}`);
