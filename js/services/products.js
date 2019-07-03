import apiClient from '../utils/common/apiClient';

const urlRoute = {
  getAllExchange: () => `https://api.exchangeratesapi.io/latest`,
};

export const loginThyrocare = (userName, password, userType) => {
	return apiClient(urlRoute.getAllExchange());
};

