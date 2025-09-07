import WebApp from "@twa-dev/sdk";
import axios, { AxiosRequestConfig } from "axios";
import { login } from "./requests";

const backendApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

backendApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

backendApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const initData = WebApp.initData;
      if (initData) {
        await login(initData);

        return backendApi(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);

export default backendApi;
export * from "./requests";
