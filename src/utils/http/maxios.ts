import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IResponse } from "@/utils/http/type";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 50000,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  }
);

axiosInstance.interceptors.response.use(
  (
    response: AxiosResponse
  ): AxiosResponse<IResponse> | Promise<AxiosResponse<IResponse>> => {
    return response;
  },
  (err) => {
    console.log(err)
  }
);

export default axiosInstance;
