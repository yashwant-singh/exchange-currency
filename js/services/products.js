import apiClient from '../utils/common/apiClient';

export const fetchExchangeRate = () => {
  return fetch('https://api.exchangeratesapi.io/latest');
  // return apiClient('https://api.exchangeratesapi.io/latest');
};

