import mAxios from "@/utils/http/maxios";
import { AxiosResponse } from "axios";
import { IResponse } from "./type";

const errHandler = (response: IResponse) => {
  console.log(response);
};

export const reqGet = <T>(url: string): Promise<T | undefined> => {
  return mAxios.get(url).then((response: AxiosResponse<IResponse<T>>) => {
    if (response.data.code === 200) {
      return response.data.data;
    }
    errHandler(response.data);
  });
};

export const reqPost = <T>(url: string, data: object): Promise<T | undefined> => {
  return mAxios.post(url, data).then((response: AxiosResponse<IResponse<T>>) => {
    if (response.data.code === 200) {
      return response.data.data;
    }
    errHandler(response.data);
  });
};
