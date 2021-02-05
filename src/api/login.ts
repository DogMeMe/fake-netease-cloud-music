import { IQrBase, IQrKey } from "@/model/login";
import { reqGet, reqPost } from "@/utils/http";

export const getQrKey = async () => {
  return await reqGet<IQrKey>("/login/qr/key");
};

export const getQrBase = async (key: string) => {
  return await reqPost<IQrBase>('/login/qr/create',{key})
}