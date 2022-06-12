import Api from './api';

export const getAllCountries = async () => {
  try {
    const countries = await Api.get(`all`);
    return countries;
  } catch (err) {
    throw err;
  }
};

export const countriesService = {
    getAllCountries,
  };