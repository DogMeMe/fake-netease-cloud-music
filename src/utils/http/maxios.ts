import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IResponse } from "@/utils/http/type";

const axiosInstance = axios.create({
  baseURL: 'http://192.168.2.194:3000/',
  timeout: 10000,
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
