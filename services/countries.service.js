import Api from './api';

export const getAllCountries = async () => {
  try {
    const countries = await Api.get(`all`);
    return countries;
  } catch (err) {
    throw err;
  }
};

export const getCountryByCode = async (code) => {
  try {
    const country = await Api.get(`alpha/${code}`);
    return country;
  } catch (err) {
    throw err;
  }
};
export const getBorderCountries = async (borderCodes) => {
  try {
    const countries = await Api.get(`alpha?codes=${borderCodes}`);
    return countries;
  } catch (err) {
    throw err;
  }
};

export const countriesService = {
    getAllCountries,
    getCountryByCode,
    getBorderCountries
  };