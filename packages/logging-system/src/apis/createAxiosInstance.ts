import axios from 'axios';

export const createAxiosInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      withCredentials: true,
    },
  });
};
