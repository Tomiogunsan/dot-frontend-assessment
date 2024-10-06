import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { apiBaseUrl } from "./constant";


const axiosParam = {
  baseURL: apiBaseUrl,
};

const axiosInstance = axios.create(axiosParam);

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
  };
};

export default api(axiosInstance);
