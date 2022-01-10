export const getFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};

export const emailValidation = (e) => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(e);
};

export const mobileValidation = (e) => {
  const pattern = /^[0]?[789]\d{9}$/;
  return pattern.test(e);
};
