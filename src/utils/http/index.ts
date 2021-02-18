import mAxios from "@/utils/http/maxios";
import { AxiosResponse } from "axios";
import { IResponse } from "./type";

const errHandler = <T>(response: T) => {
  console.log(response);
};

export const reqGet = <T extends IResponse>(
  url: string
): Promise<T | undefined> => {
  return mAxios.get(url).then((response: AxiosResponse<T>): T | undefined => {
    if (response.data.code === 200) {
      return response.data;
    }
    errHandler(response.data);
  });
};

export const reqPost = <T extends IResponse>(
  url: string,
  data: object
): Promise<T | undefined> => {
  return mAxios.post(url, data).then((response: AxiosResponse<T>): T | undefined => {
    if (response.data.code === 200) {
      return response.data;
    }
    errHandler(response.data);
  });
};
