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
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
  };
};

export default api(axiosInstance);
