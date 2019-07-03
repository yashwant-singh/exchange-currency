import axios from 'axios';

const TIMEOUT = 10000;
function apiClient(url = '', httpMethod = 'get', params = {}, data = {}, headers = {}, cancelRequestToken = '') {
  return axios({
    url,
    timeout: TIMEOUT,
    method: httpMethod,
    data,
    headers,
    params,
    cancelToken: cancelRequestToken,
  })
    .catch((error) => {
      if (axios.isCancel(error)) {
        throw new Error('Request cancelled');
      } else if (!error.response) {
        throw new Error('Network Error');
      } else {
        throw error;
      }
    });
}

export default apiClient;