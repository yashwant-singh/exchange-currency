// import apiClient from '../utils/common/apiClient';

export const fetchExchangeRate = () => {
  return fetch('https://api.exchangeratesapi.io/latest').then(data=> console.log(data));
};

